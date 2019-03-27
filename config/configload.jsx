// Imprtant to use '* as'
import * as I18N from "../config/i18n/i18nload.json";

export const I18NLoad = () => {
  // React/JS adds 'I18N.default' to structure (plus '[module]' which can be igored)
  return { I18N };
};

export const ConfigLoad = () => {
  return { fred: "fred", bill: "bill" };
};
