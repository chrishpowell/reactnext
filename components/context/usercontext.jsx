// -------------------------------------
//           USER CONTEXT
// -------------------------------------
const { getGlobal, setGlobal, useGlobal } = require("reactn");
import { Constants } from "./constants";

// --------------------------- [User context] ---------------------------
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

// --------------------------- [I18N stuff] ---------------------------
//         THESE ARE THE DEFAULT VALUES...
//---------------------------------------------------------------------
//
// - Locale
global.accountTypeLocale = {
  locale: "en-GB",
  lang: "en",
  format: { style: "currency", currency: "GBP" },
  perMonth: "per month",
  perUser: "per user",
  unicodeVersion: "5.2",
  regex: /\b[a-zA-Z]+(?:['-]?[a-zA-Z]+)*\b/
};

const I18NaccountTypeLocale = {
  Message: "accountTypeLocale",
  Get: () => {
    return accountTypeLocale;
  },
  Set: newObj => {
    accountTypeLocale = newObj;
  },
  Dump: () => {
    return Object.entries(accountTypeLocale);
  }
};

//
// - Registration display fields initial values
global.regFormValues = {
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
};

const I18NregFormValues = {
  Message: "regFormValues",
  Get: () => {
    return formValuesI18N;
  },
  Set: newObj => {
    formValuesI18N = newObj;
  },
  Dump: () => {
    return Object.entries(formValuesI18N);
  }
};

//
// - Input fields initial values
global.regFormInputs = {
  familyname: "Family name...",
  othername: "Other/given names...",
  email: "Email...",
  password: "Password...",
  password2: "Password validate...",
  dob: "Date of Birth...",
  lob: "Birth locn...",
  locn: "Curr locn..."
};

const I18NregFormInputs = {
  Message: "regFormInputs",
  Get: () => {
    return inpValuesI18N;
  },
  Set: newObj => {
    inpValuesI18N = newObj;
  },
  Dump: () => {
    return Object.entries(inpValuesI18N);
  }
};

//
// - Account Types (Radio Buttons)
global.accountTypeList = [
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
    desc: "Syndicated per user access [GraphQL/JSON data feed, min 20 users]",
    price: 1.99,
    perUser: true
  },
  {
    id: "corporate",
    desc: "Corporate window [Global home page and marketing, no charting]",
    price: 99.99,
    perUser: false
  }
];

const I18NaccountTypeList = {
  Message: "accountTypeList",
  Get: () => {
    return accountTypeList;
  },
  Set: newObj => {
    Object.assign(accountTypeList, newObj);
  },
  Dump: () => {
    return Object.entries(accountTypeList);
  }
};

//
// - Error messages
global.errorMsgs = {
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
};

const I18NErrorMsgs = {
  Message: "errorMsgs",
  Get: () => {
    return errorMsgs;
  },
  Set: newObj => {
    errorMsgs = newObj;
  },
  Dump: () => {
    return Object.entries(errorMsgs);
  }
};

//
// - Export all
export {
  UserContext,
  I18NaccountTypeLocale,
  I18NformValuesI18N,
  I18NinpValuesI18N,
  I18NErrorMsgs,
  I18NaccountTypeList
};
