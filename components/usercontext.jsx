// -------------------------------------
//           USER CONTEXT
// -------------------------------------
import React from "react";
import { Constants } from "./constants";

//
// - React context
const userSession = React.createContext({});
export const UserCtxProvider = userSession.Provider;
export const UserCtxConsumer = userSession.Consumer;

//
// - User context initial
global.userStuff = {
  email: Constants.defaultEmail,
  IP: Constants.noIP,
  locale: {
    cookie: Constants.cookieName,
    currCtry: Constants.unknownCountry,
    resCtry: Constants.unknownCountry,
    langLoc: Constants.unknownLangloc
  },
  ctryDetails: Constants.defCtryDetails
};

//
// - Manipulate user context
const UserContext = {
  Get: () => {
    return userStuff;
  },
  SetIP: IP => {
    userStuff.IP = IP;
  },
  SetEmail: email => {
    userStuff.email = email;
  },
  SetLocale: (cookie, currCtry, resCtry, langLoc) => {
    userStuff.locale.cookie = cookie;
    userStuff.locale.currCtry = currCtry; // Where currently
    userStuff.locale.resCtry = resCtry; // Resident country
    userStuff.locale.langLoc = langLoc; // Eg: fr-FR
  },
  SetCtryDetails: (isoCode, cd) => {
    userStuff.ctryDetails.isoCode = isoCode;
    userStuff.ctryDetails.details = cd;
  },
  Dump: () => {
    return Object.entries(userStuff);
  }
};

export default UserContext;
