//---------------------------------------
//           LOGIN BOX 2
//---------------------------------------
import React, { Component } from "react";
import {
  LogRegGrid,
  LocaleDropdown,
  SocialLogin,
  Input,
  BigButton,
  EmailUser,
  PwdUser,
  LoginButton,
  RegisterButton
} from "../../styledcomponents";
import LangsFlag from "../home/langsflag";
import { SocialLoginIcons } from "./socialloginicons";
import RegistrationApp from "./register";

//... To be loaded fromserver
import { formValuesI18N, inpValuesI18N } from "../../config/i18n/I18Nlogreg-EN";

//======================
//... Remove!!
const isoCode = "LV";
//======================

//
//-----------------------------
//      M A I N
//-----------------------------
class LoginBox extends Component {
  state = {
    emailuser: inpValuesI18N.email,
    password: inpValuesI18N.password
  };

  register = React.createRef();

  registerCall = () => {
    this.register.current.handleOpenModal();
  };

  loginCall = () => {
    console.log("..> Login!");
  };

  handleChange = emailuser => event => {
    this.setState({
      [emailuser]: event.target.value
    });
  };

  render() {
    return (
      <div id="registration">
        <RegistrationApp ref={this.child} />
        <LogRegGrid style={{ width: 455, height: 75 }}>
          <LocaleDropdown>
            <LangsFlag isoCode={isoCode} />
          </LocaleDropdown>
          <SocialLogin>
            <SocialLoginIcons />
          </SocialLogin>
          <EmailUser>
            <Input
              id="emailuser"
              value={this.state.emailuser}
              onChange={() => this.handleChange("emailuser")}
            />
          </EmailUser>
          <PwdUser>
            <Input
              id="pwd"
              type="password"
              value={this.state.password}
              onChange={() => this.handleChange("password")}
            />
          </PwdUser>
          <LoginButton
            style={{
              border: "1px solid darkgrey",
              padding: 2,
              borderRadius: 2
            }}
          >
            <BigButton type="login" onClick={() => this.loginCall()}>
              {formValuesI18N.loginButton}
            </BigButton>
          </LoginButton>
          <RegisterButton
            style={{
              border: "1px solid darkgrey",
              padding: 2,
              borderRadius: 2
            }}
          >
            <BigButton type="register" onClick={() => this.registerCall()}>
              {formValuesI18N.registerButton}
            </BigButton>
          </RegisterButton>
        </LogRegGrid>
        <RegistrationApp ref={this.register} />
      </div>
    );
  }
}

export { LoginBox };
