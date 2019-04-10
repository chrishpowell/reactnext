//-----------------------------------
//          APP STATE  ??
//-----------------------------------
// import React from "react";
// import { Constants } from "./constants";

//
// - User context (initial)
global.appStuff = {
  ctryLang: "en-GB",
  tweetObj: { sign: "", tweets: [] },
  i18nObj: {}
};

//
// - Manipulate app context
const AppContext = {
  Get: () => {
    return appStuff;
  },
  GetTweetObj: () => {
    return appStuff.tweetObj;
  },
  GetTweets: () => {
    return appStuff.tweetObj.tweets;
  },
  SetTweets: (sign, tweets) => {
    appStuff.tweetObj.sign = sign;
    appStuff.tweetObj.tweets = tweets;
  },
  GetSign: () => {
    return appStuff.tweetObj.sign;
  },
  GetCtryLang: () => {
    return appStuff.ctryLang;
  },
  SetCtryLang: ctryLang => {
    appStuff.ctryLang = ctryLang;
  },
  GetI18NObj: () => {
    return appStuff.i18nObj;
  },
  SetI18NObj: i18nObj => {
    appStuff.i18nObj = i18nObj;
  },
  Dump: () => {
    return Object.entries(appStuff);
  }
};

module.exports = AppContext;
