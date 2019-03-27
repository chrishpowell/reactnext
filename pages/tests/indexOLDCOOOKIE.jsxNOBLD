import React from "react";
import { I18NCookieGet } from "../components/cookiei18n";
import { UserCtxProvider, UserCtxConsumer } from "../components/usercontext";

const accountName = "ChrisP";
const locale = "zh-CN";

const userSession = React.createContext(userStuff);

export default class GetCookie extends React.Component {
  // static getInitialProps({ req }) {
  //   i18ncookie = I18NCookieGet({ accountName, locale });
  //   if (req) {
  //     console.log("Server: I..> ", i18ncookie);
  //   } else {
  //     console.log("Client: I..> ", i18ncookie);
  //   }

  //   return i18ncookie;
  // }
  componentDidMount() {
    i18ncookie = I18NCookieGet({ accountName, locale });
  }

  render() {
    return i18ncookie;
  }
}
