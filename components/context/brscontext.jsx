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
const BrsContext = createContext();
const BrsConsumer = BrsContext.Consumer;

//
// Set state and fetch into AppContext (via server)
const getContext = action => {
  switch (action.type) {
    case Constants.LOCALE:
      fetch("http://localhost:2999/socket/i18n?locale=" + action.locale)
        .then(checkStatus)
        .then(res => AppContext.SetI18NObj(res.json()))
        .then(AppContext.SetCtryLang(action.locale));
      return AppContext.GetI18NObj();
    case Constants.TWEET:
      AppContext.SetCtryLang(action.locale);
      console.log("***> fetch tweets");
      fetch("http://localhost:2999/socket/tweets?locale=" + action.locale)
        .then(checkStatus)
        .then(res => AppContext.SetTweets(res.json()))
        .then(res =>
          console.log("***> What's in res after fetch: ", res.json())
        );
      return AppContext.GetTweets();
    case Constants.CTRYLANG:
      return AppContext.GetCtryLang();
  }
};

//
// Fetch error handling
const checkStatus = response => {
  if (response.ok) {
    console.log("!! Response ok !!");
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
  }
};

//
// Get context
// const getContext = action => {
//   switch (action.type) {
//     case Constants.LOCALE:
//       console.log(".....> Get LOCALE", AppContext.GetI18NObj());
//       return AppContext.GetI18NObj();
//     case Constants.CTRYLANG:
//       return AppContext.GetCtryLang();
//     case Constants.TWEET:
//       console.log(".....> Get TWEETS", AppContext.GetTweets());
//       return AppContext.GetTweets();
//     default:
//       console.log("getContext: FAILED!!");
//   }
// };

//
// Provider (tweetstamp will not work with IE<v9)
// setLocale: loc => {
//   setContext({
//     type: Constants.LOCALE,
//     locale: loc
//   }),
//     () => {
//       localStorage.setItem("locale", loc);
//     };
// },
// setTweets: loc => {
//   setContext({ type: Constants.TWEET, locale: loc }),
//     () => {
//       localStorage.setItem("locale", loc);
//     };
// },
const BrsProvider = props => {
  const context = {
    getLocale: loc => {
      return getContext({ type: Constants.LOCALE, locale: loc });
    },
    getCtryLang: () => {
      return getContext({ type: Constants.CTRYLANG });
    },
    getTweets: loc => {
      return getContext({ type: Constants.TWEET, locale: loc });
    }
  };

  return (
    <BrsContext.Provider value={context}>{props.children}</BrsContext.Provider>
  );
};

export { BrsContext, BrsProvider, BrsConsumer };
