// Important to use '* as'
import * as I18N from "../config/i18n/i18nload.json";

export const I18NLoad = () => {
  // React/JS adds 'I18N.default' to structure (plus '[module]' which can be ignored)
  return { I18N };
};

export const UserLocale = () => {
  // Use cookie to get user prefs.  If none, load from account
  return null;
};
