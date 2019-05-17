//-----------------------------------
//          USER/Browser CONTEXT
//-----------------------------------
import { createContext, useState } from "react";
// import fetch from "isomorphic-unfetch";
// Constants
import { Constants } from "../constants/constants";
// App context
import { ctxt, AppContext } from "./appcontext1";
// The context
const BrsContext = createContext({});
const BrsConsumer = BrsContext.Consumer;

//
// Set state and fetch into AppContext (via server)
const setContext = action => {
  switch (action.type) {
    case Constants.LOCALE:
      AppContext.SetCtryLang(action.locale);
      AppContext.SetTestObj({ test1: "arglebargel", test2: "uniwunieuw" });
      console.log("....> %s, %s", action.type, AppContext.GetTestObj());
      return null;
    case Constants.TWEET:
      AppContext.SetTestObj({ test1: "arglebargel", test2: "test2" });
      console.log(".....> ", action.type);
      return {
        tweetstamp: Date.now()
      };
    default:
      console.log("setContext: FAILED!!");
  }
};

const getContext = action => {
  switch (action.type) {
    case Constants.TWEET:
      console.log(".....> Get TWEETS", AppContext.GetTestObj(action.locale));
      return AppContext.GetTestObj(action.locale);
    default:
      console.log("getContext: FAILED!!");
  }
};

//
// Provider (tweetstamp will not work with IE<v9)
const BrsProvider = props => {
  const context = {
    setLocale: loc => {
      setContext({
        type: Constants.LOCALE,
        locale: loc
      }),
        () => {
          localStorage.setItem("locale", loc);
        };
    },
    getLocale: () => {
      return getContext({ type: Constants.LOCALE });
    },
    setTweets: loc => {
      setContext({ type: Constants.TWEET, locale: loc }),
        () => {
          localStorage.setItem("locale", loc);
        };
    },
    getTweets: () => {
      return getContext({ type: Constants.TWEET });
    }
  };

  return (
    <BrsContext.Provider value={context}>{props.children}</BrsContext.Provider>
  );
};

export { BrsContext, BrsProvider, BrsConsumer };
