// -------------------------------------
//           LANDING PAGE
// -------------------------------------
import {
  PrediktGrid1,
  LogoCell,
  LoginRegCell,
  NavbarCell,
  ContentCell,
  LeftCell,
  FooterCell
} from "../layouts/prediktgrids";
import { BigDate } from "./bigdate";
import { LoginBox } from "./loginnregisterbox";

//
//-----------------------------
//      M A I N
//-----------------------------
// - Landing Page hit
const LandingPageApp = () => {
  return (
    <PrediktGrid1>
      <LogoCell style={{ fontSize: 28 }}>Predikt.IO</LogoCell>
      <LoginRegCell>
        <LoginBox />
      </LoginRegCell>
      <LeftCell style={{ border: "1px solid green" }} />
      <NavbarCell />
      <ContentCell>
        <h2>Some content</h2>
      </ContentCell>
      <BigDate />
      <FooterCell>This is the footer</FooterCell>
    </PrediktGrid1>
  );
};

export default LandingPageApp;
