//-----------------------------
//     TWEET BOX
//-----------------------------

export const TweetBox = props => {
  return (
    <div className="bubble" style={props.style}>
      <p style={{ fontWeight: "bold" }}>{props.acct}</p>
      <p>{props.tweet}</p>
      <div className="bubble-arrow" />
      <style jsx>{`
        .bubble {
          background: #efefef;
          border: 1px solid #a7a7a7;
          -webkit-border-radius: 4px;
          border-radius: 4px;
          -webkit-box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
          box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
          font-size: 11px;
          color: #311b92;
          line-height: 1.3;
          margin: 0 auto 40px 30px;
          max-width: 400px;
          padding: 15px;
          position: relative;
        }
        .bubble p {
          margin: 5px;
        }
        .bubble p:last-of-type {
          margin-bottom: 0;
        }
        .bubble-arrow {
          border-left: 21px solid transparent;
          border-top: 20px solid rgba(0, 0, 0, 0.2);
          bottom: -25px;
          position: absolute;
          right: 15px;
        }
        .bubble-arrow::before {
          border-left: 23px solid transparent;
          border-top: 23px solid #a7a7a7;
          bottom: 2px;
          content: "";
          position: absolute;
          right: 5px;
        }
        .bubble-arrow::after {
          border-left: 21px solid transparent;
          border-top: 21px solid #efefef;
          bottom: 4px;
          content: "";
          position: absolute;
          right: 6px;
        }
      `}</style>
    </div>
  );
};
