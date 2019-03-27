// -------------------------------------
//           BIG DATE
// -------------------------------------
import { getDateObj, separateNumberIntoUnits } from "../../utils/dateutils";

//... Mock day prediction
const getDayPrediction = () => {
  return "Moon in conjunction with Pluto 11:37pm [intense emotions and feeling to others or from others]";
};

//
//---------------------------------
//        M A I N
//---------------------------------
export const BigDate = lang => {
  //
  // - Arrange date
  let dateObj = getDateObj(lang); // D, M, Y
  let dayarr = separateNumberIntoUnits(dateObj.day);

  return (
    <>
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

      <style jsx>{`
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
