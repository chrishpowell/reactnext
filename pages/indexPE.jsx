// -------------------------------------
//    PREDIKT ENTRY - INDEX PAGE
// -------------------------------------
import Page from "../layouts/page";
import LandingPageApp from "../components/landingPage";
// Global constants
import { Constants } from "../components/constants";
// Some global context
import UserContext from "../components/usercontext";
// - Initial data load:
//...Location from IP and check for cookie
import getIPLocnSetCookie from "../components/location-cookie";

//
//-----------------------------
//      M A I N
//-----------------------------
const PrediktEntry = ({ locale }) => {
  return (
    <Page isoCode={locale.isoCode}>
      <LandingPageApp />
    </Page>
  );
};

//
// - Get the initial data
PrediktEntry.getInitialProps = async () => {
  //   console.log("...getInitialProps...");
  //
  // - Get external IP etc.
  //     GeoIP test (Maxmind):
  //     Success: Home Page locale default to curr. locn.
  //     Fail: (IP not found): Default to en-US
  //     [Note Home Page has lang dropdown, always shows English and local (if poss.) as top two options]
  if (
    UserContext.Get().locale.langLoc === Constants.unknownLangloc &&
    UserContext.Get().IP === Constants.noIP
  ) {
    // console.log("...getLocn, setCookie...");
    await getIPLocnSetCookie();
  }

  //
  // - Ctry code [0][0] and details [0][1] in here...:
  return { locale: UserContext.Get().ctryDetails };
};

export default PrediktEntry;
