//------------------------------
//       INDEX
//------------------------------
// Layout and start
import { Page } from "../layouts/page";
import { Home } from "./home";

//
// ***TEST ***
// const getUserLocale = () => {
//   return "en-GB";
// };

//
//---------------------------
//      M A I N
//---------------------------
const Index = () => {
  return (
    <Page>
      <Home />
    </Page>
  );
};

export default Index;
