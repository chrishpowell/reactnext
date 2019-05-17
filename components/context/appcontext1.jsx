//-----------------------------------
//          APP CONTEXT
//-----------------------------------
//
// - App context (initial)
const ctxt = {
  ctryLang: "un-UN",
  testObj: { test1: "", test2: "" }
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
  GetTestObj: () => {
    return ctxt.testObj;
  },
  SetTestObj: newTestObj => {
    ctxt.testObj = newTestObj;
  }
};

export { ctxt, AppContext };
