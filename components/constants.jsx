// -------------------------------------
//           CONSTANTS
// -------------------------------------
// Country data
import * as ctrydata from "countries-list/dist/data.min.json";
import JsonFind from "json-find";
const CData = JsonFind(ctrydata);

// Maxmind
const MaxMindDb =
  "/home/chrispowell/npmProjects/Maxmind/GeoLite2-Country_20190219/GeoLite2-Country.mmdb";

// Various constants
const Constants = {
  defaultEmail: "example.noone@example.com",
  unknownCountry: "UN",
  unknownLangloc: "un-UN",
  defaultLangLoc: "en-US",
  cookieName: "Predikt.IO",
  noIP: "0",
  cookie: {
    path: "/",
    sameSite: "strict",
    expires: new Date("2038-01-01"),
    domain: "localhost" // Will be Predikt.IO
  },
  defCtryDetails: {
    isoCode: "UN",
    details: {
      name: "Unknown",
      native: "Unknown",
      phone: "000",
      continent: "NO",
      capital: "Unknown",
      currency: "NON",
      languages: ["un"],
      emoji: "",
      emojiU: ""
    }
  }
};

export { Constants, CData, MaxMindDb };
