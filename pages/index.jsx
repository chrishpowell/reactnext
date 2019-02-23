// -------------------------------------
//           INDEX PAGE
// -------------------------------------
import Navbar from "../components/navbar";
import LandingPageApp from "../components/landingPage";
import RegistrationApp from "../components/register";
import LoginApp from "../components/login";

export default () => (
  <div>
    <Navbar />
    {/* Landing Page */}
    <LandingPageApp />

    {/* Register  (if selected) */}
    {/* <RegistrationApp /> */}
    {/* Login (if selected) */}
    {/* <LoginApp /> */}
  </div>
);
