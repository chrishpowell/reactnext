//---------------------------------------
//   STYLED COMPONENTS (LOGIN/REGISTER)
//---------------------------------------
import React from "react";

//---------------------------------------
//          LOGIN (REGISTER)
//---------------------------------------
//
// - Grid
export const LogRegGrid = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          padding: 2px;
          background-color: #fff;
          font-family: Arial;
          font-size: 14px;
          color: #444;
          display: grid;
          grid-column-gap: 3px;
          grid-template-columns: 250px 100px 100px;
          grid-template-rows: 20px 25px 25px;
          grid-template-areas:
            "localedd sociallogin sociallogin"
            "email login register"
            "upwd . .";
        }
      `}</style>
    </section>
  );
};

//// - Innergrid?
export const AstroGrid = () => {
  return (
    <section>
      <style jsx>{`
        section {
          border: "1px solid red";
        }
      `}</style>
    </section>
  );
};

export const LocaleDropdown = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: localedd;
        }
      `}</style>
    </section>
  );
};

export const SocialLogin = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: sociallogin;
          justify-self: left;
          disply: inline-block;
        }
      `}</style>
    </section>
  );
};

export const EmailUser = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: email;
        }
      `}</style>
    </section>
  );
};

export const PwdUser = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: upwd;
        }
      `}</style>
    </section>
  );
};

export const LoginButton = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: login;
          grid-row-end: span 2;
        }
      `}</style>
    </section>
  );
};

export const RegisterButton = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: register;
          grid-row-end: span 2;
        }
      `}</style>
    </section>
  );
};
