// -------------------------------------
//         GET LOCATION COMP
// -------------------------------------
import logger from "./logging"; // Convert to sentry
import { Cookies } from "react-cookie";
import UserContext from "./usercontext";
import { Constants, CData, MaxMindDb } from "./constants";
import { Reader } from "@maxmind/geoip2-node";
import publicIP from "public-ip";
import fs from "fs";
//import { ErrorMsg } from "./errormsgs";

// Initialise cookies
const cookies = new Cookies();

//
// - Cookie handling
const cookieHandle = locale => {
  //
  // - Read for cookie:
  // 1. No cookie
  //    1b. Write new cookie
  // 2. Cookie:
  //    2a. Read/use locale from cookie
  // 3. Load into context

  // Read for cookie
  const prediktCookie = cookies.get(Constants.cookieName);
  if (prediktCookie === undefined) {
    // No cookie found, write one
    cookies.set(Constants.cookieName, { locale }, Constants.cookie);

    // Update if/when logged in/registered
    UserContext.SetLocale(Constants.cookieName, locale);
  } else {
    // Cookie found
    // User can update context/cookie if/when logged in/registered
    UserContext.SetLocale(Constants.cookieName, prediktCookie.locale);
  }
};

//
//-----------------------------
//      M A I N
//-----------------------------
//  - Get public IP
// [IPv4]
const getIPLocnSetCookie = async () => {
  //
  // - Undefined locale
  let locale;

  // - Get the IP
  await publicIP
    .v4({ https: false })
    .then(ip => {
      //   logger.info("(gIPLSC)ipv4...: %s", ip);

      // Set locale via Maxmind and geoip
      let mmrdr;
      try {
        mmrdr = Reader.openBuffer(fs.readFileSync(MaxMindDb));
      } catch (err) {
        logger.error("(getIPLocnSetCookie) Maxmind db read error: %s", err);
        //react-alert(ErrorMsg.noIPFound + Constants.defaultLangLoc); // Alert user
        locale = Constants.defaultLangLoc;
        return;
      }

      //
      // - Output Country, emoji(flag), language
      const ctryData1 = mmrdr.country(ip); // MaxMind country
      const ctryData2 = CData.checkKey(ctryData1.country.isoCode); // [CData]: Some extra country data (language etc.)

      //
      // - Set locale
      locale = ctryData2.languages[0] + "-" + ctryData1.country.isoCode;
      //logger.info("(getIPLocnSetCookie) Your Country/Locale..> %s, %s", ctryData2.name, locale);

      //
      // - Set userContext
      UserContext.SetCtryDetails(ctryData1.country.isoCode, ctryData2);
      UserContext.SetEmail(Constants.defaultEmail); // ?
      UserContext.SetLocale(Constants.cookieName, locale);
      UserContext.SetIP(ip);
      //   logger.info("(gIPLSC) UserContext: ", UserContext.Dump());
      //
      // - Cookies
      cookieHandle(locale);
    })
    .catch(err => {
      logger.error(
        "(getIPLocnSetCookie) **Not IPv4, icanhaz failed, or other: %s",
        err
      );
      //react-alert(ErrorMsg.noIPFound + Constants.defaultLangLoc); // Alert user
    });

  // - To be added (if ipv6.icanhaz reappears...)
  // [IPv6]
  // publicIP
  //   .v6({ https: false })
  //   .then(ip => { ... }
};

export default getIPLocnSetCookie;
