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
import { AppContext } from "./appcontext";
// The context
const BrsContext = createContext();
const BrsConsumer = BrsContext.Consumer;

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
      console.log("Receiving tweets *****> ", rjson);
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
    console.log("+++++>> Response OK!");
    return response;
  } else {
    let error = new Error(response.statusText);
    console.log("+++++>> ", response.statusText);
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
      return getContext({ type: Constants.LOCALE, locale: loc });
    },
    getCtryLang: () => {
      return getContext({ type: Constants.CTRYLANG });
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

export { BrsContext, BrsProvider, BrsConsumer };
