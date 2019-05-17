//------------------------------
//       INDEX
//------------------------------
import fetch from "isomorphic-unfetch";
// Context (App)
import { useContext, useEffect } from "react";
import { BrsContext } from "../components/context/brscontext";
// Constants
import { Constants } from "../components/constants/constants";
// Layout and start
import { Page } from "../layouts/page";
import { Home } from "./home";

//
// ***TEST ***
const getUserLocale = () => {
  return "en-GB";
};

//
//---------------------------
//      M A I N
//---------------------------
const Index = () => {
  const context = useContext(BrsContext);

  useEffect(() => {
    // fetch("/socket/i18n?locale=" + Constants.defaultLangLoc)
    //   .then(res => AppContext.SetTweets(res.json()))
    //   .then(json => console.log("LOCALE......> ", json));
    let currLangLoc = getUserLocale();
    console.log("!!!! currLangLoc: ", currLangLoc);
    fetch(
      "/socket/tweets?locale=" +
        (currLangLoc == Constants.unknownLangLoc
          ? Constants.defaultLangLoc
          : currLangLoc)
    ).then(res => context.setTweets(res.json()));
    console.log("TWEETS......> ", context.getTweets());
  });

  return (
    <Page>
      <Home />
    </Page>
  );
};

export default Index;
