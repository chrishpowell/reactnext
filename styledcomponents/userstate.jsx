//----------------------------------
//  STYLED COMPONENTS (USER STATE)
//----------------------------------
import React from "react";

//----------------------------------
//        USER STATE
//----------------------------------
//
// -Grid
export const AccountGrid = ({ children }) => {
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
          width: 680px;
          height: 55px;
          border: 1px solid black;
          display: grid;
          grid-column-gap: 3px;
          grid-template-columns: 420px 200px;
          grid-template-rows: 25px 25px;
          grid-template-areas:
            "row1 inout"
            "row2 search";
        }
      `}</style>
    </section>
  );
};

// @supports (display: grid):  {
//     display: grid;
//     grid-column-gap: 3px;
//     grid-template-columns: 420px 200px;
//     grid-template-rows: 25px 25px;
//     grid-template-areas:
//       "row1 inout"
//       "row2 search";
//   }

//
// - User account details (name etc.)
export const AccountDetail = props => {
  // Make bottom border a gradient...
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: row1;
          height: 25px;
          line-height: 22px;
          border-bottom: 1px solid darkgrey;
        }
      `}</style>
    </section>
  );
};

//
// - Localed and login/out container
export const InOutLocale = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: inout;
          margin-left: auto;
          margin-right: 0;
        }
      `}</style>
    </section>
  );
};

//
// - Login/Out slider
export const InOut = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          display: inline-block;
          margin: auto 0 auto 5px;
          height: 23px;
          padding: 2px;
          border: 1px solid darkgrey;
        }
      `}</style>
    </section>
  );
};

//
//- Locale display (& country flag)
export const Locale = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          display: inline-block;
          height: 23px;
          padding: 2px;
        }
      `}</style>
    </section>
  );
};

//
// - Buttons row container
export const ButtonsRow = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: row2;
        }
      `}</style>
    </section>
  );
};

//
// - Search box
export const Search = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          grid-area: search;
          margin-top: 3px;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

//-----------------------------------------
//          Buttons
//-----------------------------------------
export const Account = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          display: inline-block;
          height: 90%;
        }
      `}</style>
    </section>
  );
};

export const Settings = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          display: inline-block;
          height: 90%;
        }
      `}</style>
    </section>
  );
};

export const QandA = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          display: inline-block;
          height: 90%;
        }
      `}</style>
    </section>
  );
};

export const Notifications = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          position: relative;
          display: inline-block;
          height: 90%;
        }
      `}</style>
    </section>
  );
};

export const NotifyCount = props => {
  return (
    <section style={props.style}>
      {props.children}
      <style jsx>{`
        section {
          position: absolute;
          top: 0;
          right: 0;
          background: #f44336;
          border: 1px solid black;
          padding-left: 2px;
          padding-bottom: 2px;
          width: 14px;
          height: 14px;
          margin: 0;
          font-size: 11px;
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
};

export const ButtonWithCount = ({ children }) => {
  return (
    <button>
      {children}
      <style jsx>{`
        button {
          width: 99px;
          height: 95%;
          border-radius: 2px;
          background-color: lightgreen;
          color: black;
          font-size: 14px;
          border: 1px solid black;
          margin-top: 5px;
          margin-right: 9px;
          outline: none;
        }
        button:hover {
          background-color: #bbdefb;
          border-color: darkBlue;
        }
      `}</style>
    </button>
  );
};
