//---------------------------------------
//   STYLED COMPONENTS (MAIN GRIDS)
//---------------------------------------
import React from "react";

//---------------------------------------
//          LANDING PAGE
//---------------------------------------
//
// - Grid
export const PrediktHomeGrid = ({ children }) => {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          font-size: 15px;
          display: grid;
          grid-column-gap: 0;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          grid-template-areas:
            "pcontent1a pcontent1b pcontent1c bigdate"
            "pcontent2a pcontent2b pcontent2c bigdate";
        }
      `}</style>
    </section>
  );
};

export const ContentCellA = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: pcontent1a pcontent2a;
        }
      `}</style>
    </section>
  );
};

export const ContentCellB = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: pcontent1b pcontent2b;
        }
      `}</style>
    </section>
  );
};

export const ContentCellC = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: pcontent1c pcontent2c;
        }
      `}</style>
    </section>
  );
};

export const BigDateCell = props => {
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

//
//---------------------------------------
//          HOME PAGE
//---------------------------------------
//
// - Grid
export const PrediktBaseGrid = ({ children }) => {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          padding: 0;
          background-color: #fff;
          font-family: Arial;
          font-size: 14px;
          color: #444;
          display: grid;
          grid-column-gap: 0;
          grid-row-gap: 15px;
          grid-template-columns: 30px 20px 1fr 1fr 1fr 1fr 220px;
          grid-template-rows: 80px 1fr 1fr 1fr;
          grid-template-areas:
            ". logo logo nav nav loginnstate loginnstate"
            "lleft rleft pcontent pcontent pcontent pcontent pcontent"
            "lleft rleft pcontent pcontent pcontent pcontent pcontent"
            ". . footer footer footer footer footer";
        }
      `}</style>
    </section>
  );
};

export const LeftBaseCell = props => {
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

export const RLeftBaseCell = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: rleft;
        }
      `}</style>
    </section>
  );
};

export const LogoBaseCell = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: logo;
        }
      `}</style>
    </section>
  );
};

export const NavBaseCell = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: nav;
        }
      `}</style>
    </section>
  );
};

export const LoginNStateBaseCell = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: loginnstate;
        }
      `}</style>
    </section>
  );
};

export const ContentBaseCell = props => {
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

export const FooterBaseCell = props => {
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
