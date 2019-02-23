// -------------------------------------
//           LANDING PAGE
// -------------------------------------
import logger from "./logging";
import { Cookies } from "react-cookie";
import UserContext from "./usercontext";
import { Constants, CData, MaxMindDb } from "./constants";
import { Reader } from "@maxmind/geoip2-node";
import publicIP from "public-ip";
import fs from "fs";
// Will disappear of course...:
import {mockEmailFromAccount} from "./mockdata";

// Initialise cookies
const cookies = new Cookies();

// ...Get public IP
// [IPv4]
const getIPLocation = () => {
  publicIP
    .v4({ https: false })
    .then(ip => {
      logger.info("ipv4...: %s", ip);

      // Set locale via Maxmind
      let locale;
      let mmrdr;
      if (locale === undefined) {
        try {
          mmrdr = Reader.openBuffer(fs.readFileSync(MaxMindDb));
        } catch (err) {
          logger.error("Maxmind db read error: %s", err);
          return;
        }

        // Output Country, emoji(flag), language
        const ctryData1 = mmrdr.country(ip);  // MaxMind country
        const ctryData2 = CData.checkKey(ctryData1.country.isoCode);  // CData: Some extra country data (language etc.)
        logger.error("Your Country/Locale..> %s, %s",
          ctryData2.name,
          ctryData2.languages[0] + "-" + ctryData1.country.isoCode
        );
      } else {
        locale = Constants.defaultLangLoc;
      }

      // Set user context
      cookies.set(Constants.cookieName, { locale }, Constants.cookie);
      UserContext.SetEmail(Constants.defaultEmail);
      UserContext.SetLocale(Constants.cookieName, locale);
      UserContext.SetIP(ip);
    })
    .catch(() => {
      logger.error("**Not IPv4 or icanhaz failed or db read failed");
    });

  // [IPv6]
  // publicIP
  //   .v6({ https: false })
  //   .then(ip => {
  //     console.log("ipv6...: ", ip);

  //     // Set locale via Maxmind
  //     let locale;
  //     let mmrdr;
  //     if (locale === undefined) {
  //       try {
  //         mmrdr = Reader.openBuffer(fs.readFileSync(MaxMindDb));
  //       } catch (err) {
  //         console.log("Maxmind db read error: ", err);
  //         return;
  //       }
  //       // Output Country, emoji(flag), language
  //       const ctryData1 = mmrdr.country(ip);
  //       //console.log("Country..>  ", ctryData);
  //       const ctryData2 = CData.checkKey(ctryData1.country.isoCode);
  //       console.log(
  //         "Your Country/Locale..> %s, %s",
  //         ctryData2.name,
  //         ctryData2.languages[0] + "-" + ctryData1.country.isoCode
  //       );
  //     } else {
  //       locale = Constants.defaultLangLoc;
  //     }

  //     // Set default cookie
  //     cookies.set(Constants.cookieName, { locale }, Constants.cookie);
  //     UserContext.SetEmail(Constants.defaultEmail);
  //     UserContext.SetLocale(Constants.cookieName, locale);
  //     UserContext.SetIP(ip);
  //   })
  //   .catch(() => {
  //     logger.error("**Not IPv6 or icanhaz failed or db read failed");
  //   });
};

// ... Landing Page hit
const LandingPageApp = () => {
  // Read for cookie:
  // (Note Home Page has lang dropdown, always shows English and local (if poss.) as top two options)
  // 1. No cookie
  //    1a. GeoIP test (Maxmind):
  //        Success: Home Page locale default to curr. locn.
  //        Fail: (IP not found): Default to en-US
  //    1b. Write new cookie
  // 2. Cookie:
  //    2a. Read/use locale from cookie
  // 3. Load into context

  // Read for cookie
  const prediktCookie = cookies.get(Constants.cookieName);

  if (prediktCookie === undefined) {
    // No cookie found, check geolocation
    // Get external IP
    getIPLocation();
  } else {
    UserContext.SetEmail(mockEmailFromAccount);
    UserContext.SetLocale(Constants.cookieName, prediktCookie.locale);
  }

  return null;
};

export default LandingPageApp;
