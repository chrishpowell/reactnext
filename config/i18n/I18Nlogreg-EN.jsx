// --------------------------- [I18N stuff] ---------------------------
//         THIS IS THE DEFAULT...
//---------------------------------------------------------------------
//
// - Locale
export const accountTypeLocale = {
  locale: "en-GB",
  lang: "en",
  format: { style: "currency", currency: "GBP" },
  perMonth: "per month",
  perUser: "per user",
  unicodeVersion: "5.2",
  regex: /\b[a-zA-Z]+(?:['-]?[a-zA-Z]+)*\b/
};

//
// - Registration display fields initial values
export const formValuesI18N = {
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

//
// - Input fields initial values
export const inpValuesI18N = {
  familyname: "Family name...",
  othername: "Other/given names...",
  email: "Email...",
  password: "Password...",
  password2: "Password validate...",
  dob: "Date of Birth...",
  lob: "Birth locn...",
  locn: "Curr locn..."
};

//
// - Account Types (Radio Buttons)
export const accountTypeList = [
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

//
// - Error messages
export const errorMsgs = {
  userNameIsReqd: "Family name is required",
  userNameInvalid: "Not a recognised name string",
  emailReqd: "A valid email is required",
  pwdRequired: "A password is required",
  pwdInvalid: "Your password must be 6 characters or more",
  pwdConfirm: "Password confirmation is required!",
  pwdNotSame: "Passwords do not match!",
  dateInvalid: "A valid date is required",
  loginFail: "Your username (email) or password is not valid"
};
