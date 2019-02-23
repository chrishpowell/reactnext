import { I18NLoad, ConfigLoad } from "../components/configload";
import XRegExp from "xregexp";

export default () => {
  // React/JS structures the file data by adding "I18N.default" (plus a "[module]" which can be ignored)
  const I18N = I18NLoad().I18N.default;
  const { style, currency } = I18N.format;
  console.log("---------------------------");
  console.log("I18N..> ", I18N);
  console.log("---------------------------");
  console.log("Currency..> ", currency);

  // Regex username check for this locale
  console.log("Regex..> ", XRegExp.isRegExp(XRegExp(I18N.regex)));

  // Test 'raw' object return
  const config = ConfigLoad();
  console.log("Test--> ", config);
  return null;
};
