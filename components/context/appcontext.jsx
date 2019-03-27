//-----------------------------------
//          APP STATE  ??
//-----------------------------------
import React from "react";
import { Constants } from "./constants";

//
// - User context initial
global.appStuff = {};

//
// - Manipulate app context
const AppContext = {
  Get: () => {
    return appStuff;
  },
  Dump: () => {
    return Object.entries(appStuff);
  }
};

export default AppContext;
