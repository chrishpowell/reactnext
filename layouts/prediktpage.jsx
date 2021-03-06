//---------------------------------------
//   STYLED COMPONENTS (MAIN GRIDS)
//---------------------------------------
import React from "react";

//---------------------------------------
//          LANDING PAGE
//---------------------------------------
//
// - Grid
export const PrediktGrid1 = ({ children }) => {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          padding: 2px;
          background-color: #fff;
          font-family: Arial;
          font-size: 14px;
          color: #444;
          border: 1px solid black;
          display: grid;
          grid-column-gap: 2px;
          grid-template-columns: 30px 1fr 1fr 150px;
          grid-template-rows: 1fr 1fr 1fr 1fr;
          grid-template-areas:
            "logo1 logo1 loginreg loginreg"
            "lleft navbar navbar bigdate"
            "lleft pcontent pcontent bigdate"
            "footer footer footer footer";
        }
      `}</style>
    </section>
  );
};

export const LogoCell1 = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: logo1;
        }
      `}</style>
    </section>
  );
};

export const LoginRegCell1 = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: loginreg;
        }
      `}</style>
    </section>
  );
};

export const NavbarCell1 = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: navbar;
        }
      `}</style>
    </section>
  );
};

export const ContentCell1 = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: pcontent;
        }
      `}</style>
    </section>
  );
};

export const LeftCell1 = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: lleft;
        }
      `}</style>
    </section>
  );
};

export const BigDateCell1 = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: bigdate;
        }
      `}</style>
    </section>
  );
};

export const FooterCell1 = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: footer;
        }
      `}</style>
    </section>
  );
};

//
//---------------------------------------
//          OTHER PAGES
//---------------------------------------
//
// - Grid
export const PrediktGrid2 = ({ children }) => {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          padding: 2px;
          background-color: #fff;
          font-family: Arial;
          font-size: 14px;
          color: #444;
          border: 1px solid black;
          display: grid;
          grid-column-gap: 3px;
          grid-template-columns: 30px 1fr 1fr 150px;
          grid-template-rows: 1fr 1fr 1fr 1fr;
          grid-template-areas:
            "left logo2 loginreg right"
            "left navbar navbar right"
            "left . . right"
            "footer footer footer footer";
        }
      `}</style>
    </section>
  );
};

export const LogoCell2 = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: logo2;
        }
      `}</style>
    </section>
  );
};

export const LeftCell2 = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: left;
        }
      `}</style>
    </section>
  );
};

export const LoginRegCell2 = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: loginreg;
        }
      `}</style>
    </section>
  );
};
