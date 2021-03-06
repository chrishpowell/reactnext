//----------------------------------------------------
//       PREDIKT HOMEPAGE LAYOUT
//----------------------------------------------------
import { getDateObj, separateNumberIntoUnits } from "../../utils/dateutils";

//... Mock day prediction
const getDayPrediction = () => {
  return "Moon in conjunction with Pluto 11:37pm [intense emotions and feeling to others or from others]";
};

//
//---------------------------------------
//        M A I N
//---------------------------------------
export const PrediktHomePage = () => {
  //
  // - Arrange date
  let dateObj = getDateObj(); // D, M, Y
  let dayarr = separateNumberIntoUnits(dateObj.day);

  //
  // - Display Home Page
  return (
    <>
      <div id="homepage">
        <div id="logo">
          <img id="header" src="../static/images/Header.png" />
        </div>
        <div id="company" className="top2bottom-grad">
          Predikt.io
        </div>
        <div id="nav">Nav</div>
        <div id="content">
          <img id="mway" src="../static/images/Universe1.png" />
        </div>
        <div id="dynamic">Dynamic</div>
        <div id="login">
          <button className="button login-button login-button-hover">
            Login
          </button>
          <button className="button register-button register-button-hover">
            Register
          </button>
        </div>
        <div id="date">
          <div id="datecontainer">
            <div id="large-date">
              <div id="day0">
                <div id="inner-grid0">
                  <div id="head0" className="vbigdate">
                    {dateObj.day < 10 ? "0" : dayarr[0]}
                  </div>
                  <div id="foot0">{getDayPrediction()}</div>
                </div>
              </div>
              <div id="day1">
                <div id="inner-grid1">
                  <div id="head1">
                    {dateObj.month.toUpperCase() + " " + dateObj.year}
                  </div>
                  <div id="foot1" className="vbigdate">
                    {dateObj.day < 10 ? dayarr[0] : dayarr[1]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #homepage {
          display: grid;
          grid-template-columns: 30px 30px 200px 1fr 200px 220px;
          grid-template-rows: minmax(max-content, 30px) 1fr 1fr 1fr 1fr 1fr;
        }
        /* perspective: does not work well in grid */
        #logo {
          grid-column: 3 / span 2;
          grid-column-start: 2;
          font-size: 20px;
          padding-top: 22px;
        }
        #header {
          height: 50px;
          width: 400px;
        }
        #company {
          grid-column: 1;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: Helvetica;
          font-size: 30px;
          text-align: right;
          line-height: 75%;
          border-left: thin solid black;
        }
        .top2bottom-grad {
          color: #154360;
          border-width: 0 0 1px 0;
          border-style: solid;
          border-image: linear-gradient(to bottom, #154360, rgba(0, 0, 0, 0)) 1
            100%;
        }
        #whitespace {
          grid-column: 2;
        }
        #nav {
          grid-column: 3;
          background: lightskyblue;
          padding-left: 10px;
          padding-right: 10px;
        }
        #content {
          grid-column: 4;
          background: lavender;
          padding-left: 10px;
          padding-right: 10px;
        }
        #mway {
          width: 100%;
          height: 100%;
          clip-path: polygon(
            188px 452px,
            158px 19px,
            400px 11px,
            351px 385px,
            439px 67px,
            557px 14px,
            574px 456px,
            584px 25px,
            700px 75px,
            752px 359px,
            752px 42px,
            922px 17px,
            1114px 386px,
            970px 0px,
            1245px 82px,
            1353px 550px,
            15px 553px,
            10px 48px,
            107px 18px
          );
        }
        #dynamic {
          grid-column: 5;
          background: lightcyan;
          padding-left: 10px;
          padding-right: 10px;
        }
        #login {
          grid-column: 5;
          grid-row: 1;
          border: solid thin black;
          padding: 3px;
          padding-right: 7px;
          margin: 3px 3px 5px 3px;
        }
        .button {
          border: none;
          color: white;
          width: 100%;
          padding: 5px 15px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 14px;
          margin: 4px 2px;
          cursor: pointer;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
          -webkit-transition-duration: 0.4s; /* Safari */
          transition-duration: 0.3s;
        }
        .login-button {
          background-color: darkblue;
        }
        .login-button-hover:hover {
          box-shadow: none;
        }
        .register-button {
          background-color: darkred;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .register-button-hover:hover {
          box-shadow: none;
        }
        #date {
          grid-column: 6;
        }
        #datecontainer {
          grid-row: 4 / span 2;
          grid-row-start: 4;
          grid-row-end: span 2;
          padding-left: 20px;
          padding-top: 50px;
        }
        #large-date {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          max-width: 150px;
          max-height: 300px;
        }
        .vbigdate {
          font-family: Helvetica;
          font-size: 1250%;
          margin-bottom: -10px;
          line-height: 75%;
        }
        #day0 {
          grid-row: 1 / span 2;
          grid-row-start: 1;
          grid-row-end: span 2;
          grid-column: 1 / span 2;
          grid-column-start: 1;
          grid-column-end: span 2;
        }
        #day1 {
          grid-row: 2 / span 2;
          grid-row-start: 2;
          grid-row-end: span 2;
          grid-column: 2 / span 2;
          grid-column-start: 2;
          grid-column-end: span 2;
        }
        #inner-grid0 {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 45px;
        }
        #inner-grid1 {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 20px 1fr;
        }
        #head0 {
          color: #ffff80;
          grid-row: 1;
          grid-column: 1;
        }
        #foot0 {
          font-family: Arial;
          font-size: 15px;
          line-height: 20px;
          text-align: justify;
          text-justify: inter-word;
          margin-top: 15px;
          color: #34495e;
          grid-row: 2;
          grid-column: 1;
          z-index: 2;
        }
        #head1 {
          font-family: Arial;
          font-size: 15px;
          text-align: right;
          grid-row: 1;
          grid-column: 1;
          z-index: 2;
        }
        #foot1 {
          color: #e6e600;
          grid-row: 2;
          grid-column: 1;
        }
      `}</style>
    </>
  );
};
