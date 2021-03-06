//-----------------------------------
//          USER/Browser CONTEXT
//-----------------------------------
// Context
import { createContext } from "react";
// Get data from server
import fetch from "isomorphic-unfetch";
// Constants
import { Constants } from "../constants/constants";
// App context
import { ctxt, AppContext } from "./appcontext";
// The context
const BrsContext = createContext(ctxt);

//
// Set state and fetch into AppContext (via server)
const getContext = async action => {
  switch (action.type) {
    case Constants.LOCALE: {
      let res = await fetch(
        "http://localhost:2999/socket/i18n?locale=" + action.locale
      )
        .then(checkStatus)
        .catch(err => console.log("Socket error! ", err));
      let rjson = await res.json();
      return rjson;
    }
    case Constants.TWEET: {
      let res = await fetch(
        "http://localhost:2999/socket/tweets?locale=" + action.locale
      )
        .then(checkStatus)
        .catch(err => console.log("Socket error!", err));
      let rjson = await res.json();
      return rjson;
    }
    case Constants.CTRYLANG:
      return AppContext.GetCtryLang();
  }
};

//
// Fetch error handling
const checkStatus = response => {
  if (response.ok) {
    return response;
  } else {
    let error = new Error(response.statusText);
    console.warn("+++++>> ", response.statusText);
    error.response = response;
    return Promise.reject(error);
  }
};

//-----------------------------
//      M A I N
//-----------------------------
const BrsProvider = props => {
  const context = {
    getLocale: loc => {
      return getContext({ type: Constants.LOCALE, locale: loc }).catch(resp =>
        console.log("*** Error! ", resp)
      );
    },
    getCtryLang: () => {
      return getContext({ type: Constants.CTRYLANG }).catch(resp =>
        console.log("*** Error! ", resp)
      );
    },
    getTweets: loc => {
      return getContext({ type: Constants.TWEET, locale: loc }).catch(resp =>
        console.log("*** Error! ", resp)
      );
    }
  };

  return (
    <BrsContext.Provider value={context}>{props.children}</BrsContext.Provider>
  );
};

export { BrsContext, BrsProvider };
