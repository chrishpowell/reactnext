import { Cookies } from "react-cookie";

const cookies = new Cookies();
let prediktCookie;
const domain = "localhost";

export const I18NCookieGet = ({ accountName, locale }) => {
  prediktCookie = cookies.get(accountName);

  if (prediktCookie === undefined) {
    prediktCookie = cookies.set(
      accountName,
      { locale },
      {
        path: "/",
        sameSite: "strict",
        expires: new Date("2038-01-01"),
        domain: domain
      }
    );
  }

  return prediktCookie;
};
