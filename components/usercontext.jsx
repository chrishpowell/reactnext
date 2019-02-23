import React from "react";

const userSession = React.createContext({});

export const UserCtxProvider = userSession.Provider;
export const UserCtxConsumer = userSession.Consumer;

// User context
let userStuff = {
  email: "nobody@example.com",
  IP: "0.0.0.0",
  locale: { cookie: "Predikt.IO", lang: "un-UN" }
};

// Manipulate user context
const UserContext = {
  Get: () => {
    return userStuff;
  },
  SetIP: IP => {
    userStuff.IP = IP;
    console.log(":..> ", userStuff);
  },
  SetEmail: email => {
    userStuff.email = email;
  },
  SetLocale: (cookie, lang) => {
    userStuff.locale.cookie = cookie;
    userStuff.locale.lang = lang;
  },
  Dump: () => {
    return JSON.stringify(userStuff);
  }
};

export default UserContext;
