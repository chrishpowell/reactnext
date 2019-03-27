// -------------------------------------
//         GET LOCATION COMP
// -------------------------------------
import logger from "./logging";
import { Cookies } from "react-cookie";
import UserContext from "./usercontext";
import { Constants, CData, MaxMindDb } from "./constants";
import { Reader } from "@maxmind/geoip2-node";
import publicIP from "public-ip";
import fs from "fs";
//import { ErrorMsg } from "./errormsgs";
// This next will disappear of course...:
//import { mockEmailFromAccount } from "./mockdata";

// Initialise cookies
const cookies = new Cookies();
let test = 1;

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
      logger.info("ipv4...: %s", ip);

      // Set locale via Maxmind and geoip
      let mmrdr;
      //console.log("2::..> ", UserContext.Get().locale); // Should be UNknown
      try {
        mmrdr = Reader.openBuffer(fs.readFileSync(MaxMindDb));
      } catch (err) {
        logger.error("Maxmind db read error: %s", err);
        //react-alert(ErrorMsg.noIPFound + Constants.defaultLangLoc); // Alert user
        locale = Constants.defaultLangLoc;
        return;
      }

      //
      // - Output Country, emoji(flag), language
      const ctryData1 = mmrdr.country(ip); // MaxMind country
      const ctryData2 = CData.checkKey(ctryData1.country.isoCode); // CData: Some extra country data (language etc.)

      //
      // - Set locale
      locale = ctryData2.languages[0] + "-" + ctryData1.country.isoCode;
      logger.info("Your Country/Locale..> %s, %s", ctryData2.name, locale);

      //
      // - Set userContext
      UserContext.SetCtryDetails(ctryData2);
      UserContext.SetEmail(Constants.defaultEmail); // ?
      UserContext.SetLocale(Constants.cookieName, locale);
      UserContext.SetIP(ip);

      //
      // - Cookies
      cookieHandle(locale);
      test = 22;
    })
    .catch(err => {
      logger.error("**Not IPv4, icanhaz failed, or other: %s", err);
      //react-alert(ErrorMsg.noIPFound + Constants.defaultLangLoc); // Alert user
    });

  // - To be added (if ipv6.icanhaz reappears...)
  // [IPv6]
  // publicIP
  //   .v6({ https: false })
  //   .then(ip => { ... }
};

//
//--------------------------
//       M A I N
//--------------------------
// ... Landing Page been hit
const GetLocationComp = props => {
  // Object.entries(props[0])
  //console.log("Hoping not UN ::> ", navCtry[0]);
  console.log("::> ", props);

  return <h3>{/* {navCtry[0]} {navCtry[1].name} */}Test</h3>;
};

//
// - Get the data set the UserContext
GetLocationComp.getInitialProps = async () => {
  console.log("...getInitialProps...");
  //
  // - Get external IP etc.
  //     GeoIP test (Maxmind):
  //     Success: Home Page locale default to curr. locn.
  //     Fail: (IP not found): Default to en-US
  //     [Note Home Page has lang dropdown, always shows English and local (if poss.) as top two options]
  if (
    UserContext.Get().locale.langLoc === Constants.unknownLangloc &&
    UserContext.Get().IP === Constants.noIP
  ) {
    console.log("...getLocn, setCookie...");
    await getIPLocnSetCookie();
  }

  //
  // - Ctry code [0][0] and details [0][1] in here...:
  return UserContext.Get().ctryDetails;
};

export default GetLocationComp;
