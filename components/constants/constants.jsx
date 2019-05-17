// -------------------------------------
//           CONSTANTS
// -------------------------------------
// Country data
const ctrydata = require("countries-list/dist/data.min.json");
const JsonFind = require("json-find");
const CData = JsonFind(ctrydata);

// Maxmind
const MaxMindDb =
  "/home/chrispowell/npmProjects/Maxmind/GeoLite2-Country_20190219/GeoLite2-Country.mmdb";

// Various constants
const Constants = {
  defaultEmail: "example.noone@example.com",
  unknownCountry: "UN",
  unknownLangloc: "un-UN",
  defaultLangLoc: "en-GB",
  defaultLang: "en",
  cookieName: "Predikt.IO",
  noIP: "0",
  cookie: {
    path: "/",
    sameSite: "strict",
    expires: new Date("2038-01-01"),
    domain: "localhost" // Will be Predikt.IO  **** Make localStorage, not cookie
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
  },
  LOCALE: "LOCALE",
  TWEET: "TWEET",
  CTRYLANG: "CTRYLANG"
};

module.exports = { Constants, CData, MaxMindDb };
