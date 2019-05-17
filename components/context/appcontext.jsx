//-----------------------------------
//          APP CONTEXT
//-----------------------------------
// Constants
const { Constants } = require("../constants/constants.jsx");

//
// - App context (initial)
const ctxt = {
  ctryLang: Constants.unknownLangloc,
  tweetSockObj: { twtSock: {}, twtChan: "" },
  i18nSockObj: { i18nSock: {}, i18nChan: "" },
  tweetObj: {
    sign: "",
    tweets: [
      { acct: "FakeAcct-1", tweet: "lorem ipsum 1" },
      { acct: "FakeAcct-2", tweet: "lorem ipsum 2" },
      { acct: "FakeAcct-3", tweet: "lorem ipsum 3" }
    ]
  },
  i18nObj: {
    accountTypeLocale: {
      locale: Constants.defaultLangLoc,
      lang: Constants.defaultLang,
      format: { style: "currency", currency: "GBP" },
      perMonth: "per month",
      perUser: "per user",
      unicodeVersion: "5.2",
      regex: /\b[a-zA-Z]+(?:['-]?[a-zA-Z]+)*\b/
    },
    regFormValues: {
      mainTitle: "Registration",
      confMsg:
        "Note: On successfully registering, you will receive an email with a link which you select for confirmation.",
      closeButton: "Close... didn't want this page!",
      acctDetails: "Account details",
      acctTypes: "Account types",
      prefLangChoose: "Your preferred language",
      famGrpTypesMsg:
        "Selecting Family or Group types means you will be the Group Manager managing members of the group. You can add or change members at any time.",
      loginButton: "Login",
      registerButton: "Register",
      buttonText: "Show map"
    },
    regFormInputs: {
      familyname: "Family name...",
      othername: "Other/given names...",
      email: "Email...",
      password: "Password...",
      password2: "Password validate...",
      dob: "Date of Birth...",
      lob: "Birth locn...",
      locn: "Curr locn..."
    },
    accountTypeList: [
      {
        id: "individual",
        desc: "Individual [1 user, secure Home Page]",
        price: 3.99,
        perUser: false
      },
      {
        id: "family",
        desc: "Family [2 to 5 users, secure Home Page]",
        price: 7.99,
        perUser: false
      },
      {
        id: "team",
        desc: "Group [6 to 22 users, secure Home Page]",
        price: 23.99,
        perUser: false
      },
      {
        id: "smallbus",
        desc: "Small business window [Global home page, no charting]",
        price: 29.99,
        perUser: false
      },
      {
        id: "syndicate",
        desc:
          "Syndicated per user access [GraphQL/JSON data feed, min 20 users]",
        price: 1.99,
        perUser: true
      },
      {
        id: "corporate",
        desc: "Corporate window [Global home page and marketing, no charting]",
        price: 99.99,
        perUser: false
      }
    ],
    userStuff: {
      email: Constants.defaultEmail,
      IP: Constants.noIP,
      locale: {
        cookie: Constants.cookieName,
        currCtry: Constants.unknownCountry,
        resCtry: Constants.unknownCountry,
        langLoc: Constants.unknownLangloc
      },
      ctryDetails: Constants.defCtryDetails
    },
    errorMsgs: {
      userNameIsReqd: "Family name is required",
      userNameInvalid: "Not a recognised name string",
      emailReqd: "A valid email is required",
      pwdRequired: "A password is required",
      pwdInvalid: "Your password must be 6 characters or more",
      pwdConfirm: "Password confirmation is required!",
      pwdNotSame: "Passwords do not match!",
      dateInvalid: "A valid date is required",
      loginFail: "Your username (email) or password is not valid",
      browserNoLocation:
        "Your browser does not support geolocation.  Manual entry will be required."
    }
  },
  testStr: "Not set..."
};

//
// - Manipulate app context
const AppContext = {
  GetCtryLang: () => {
    return ctxt.ctryLang;
  },
  SetCtryLang: newCtryLang => {
    ctxt.ctryLang = newCtryLang;
  },
  GetTweetSockObj: () => {
    return ctxt.tweetSockObj;
  },
  SetTweetSockObj: newTweetSockObj => {
    ctxt.tweetSockObj = newTweetSockObj;
  },
  GetI18NSockObj: () => {
    return ctxt.i18nSockObj;
  },
  SetI18NSockObj: newI18nSockObj => {
    ctxt.i18nSockObj = newI18nSockObj;
  },
  GetTweetObj: () => {
    return ctxt.tweetObj;
  },
  GetTweets: () => {
    return ctxt.tweetObj.tweets;
  },
  SetTweets: newTweets => {
    ctxt.tweetObj.tweets = newTweets;
  },
  GetSign: () => {
    return ctxt.tweetObj.sign;
  },
  SetSign: newSign => {
    ctxt.tweetObj.sign = newSign;
  },
  GetI18NObj: () => {
    return ctxt.i18nObj;
  },
  SetI18NObj: newI18nObj => {
    ctxt.i18nObj = newI18nObj;
  },
  GetAccountTypeLocale: () => {
    return ctxt.i18nObj.accountTypeLocale;
  },
  SetAccountTypeLocale: newATLocale => {
    ctxt.i18nObj.accountTypeLocale = newATLocale;
  },
  GetRegFormValues: () => {
    return ctxt.i18nObj.regFormValues;
  },
  SetRegFormValues: newRFV => {
    ctxt.i18nObj.regFormValues = newRFV;
  },
  GetRegFormInputs: () => {
    return ctxt.i18nObj.regFormInputs;
  },
  SetRegFormInputs: newRFI => {
    ctxt.i18nObj.regFormInputs = newRFI;
  },
  GetAccountTypeList: () => {
    return ctxt.i18nObj.accountTypeList;
  },
  SetAccountTypeList: newATList => {
    ctxt.i18nObj.accountTypeList = newATList;
  },
  GetUserStuff: () => {
    return ctxt.i18nObj.userStuff;
  },
  SetUserStuff: newUS => {
    ctxt.i18nObj.userStuff = newUS;
  },
  GetErrorMsgs: () => {
    return ctxt.i18nObj.errorMsgs;
  },
  SetErrorMsgs: newMsgs => {
    ctxt.i18nObj.errorMsgs = newMsgs;
  },
  Dump: () => {
    return (
      "ctryLang: " +
      AppContext.GetCtryLang() +
      ", Tweets: Sign [" +
      AppContext.GetSign() +
      "], tweets [" +
      AppContext.GetTweets() +
      "]" +
      ", I18N: " +
      AppContext.GetI18NObj()
    );
  },
  SetTest: str => {
    ctxt.testStr = str;
    console.log("!! Test set to: ", AppContext.GetTest());
  },
  GetTest: () => {
    return ctxt.testStr;
  }
};

module.exports = { AppContext };
