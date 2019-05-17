//----------------------------------------
//      S E R V E R
//----------------------------------------
const express = require("express");
const next = require("next");
// 0MQ
const zmq = require("zeromq");
// Properties
const properties = require("java-properties");
// Read the properties file
const zmqProps = properties.of(
  "/home/chrispowell/PrediktCommon/properties/zmq.properties"
);
// Messaging to BE
const { Message } = require("./components/messaging/messaging.jsx");
// Context (App)
const { AppContext } = require("./components/context/appcontext.jsx");

// Setup the tweet socket
const ZMQ1URL = zmqProps.get("ZMQ1URL");
// Message type (tweets)
const TWTCHAN = zmqProps.get("TWTCHAN");

// The I18N socket
const ZMQ2URL = zmqProps.get("ZMQ2URL");
// Message type (I18N)
const I18NCHAN = zmqProps.get("I18NCHAN");

// Server setup
const EPORT = zmqProps.get("EPORT");
const ESRV = zmqProps.get("ESRV");
const COLON = zmqProps.get("COLON");
// I18N Base language
const BASELOCALE = zmqProps.get("I18NBASE");

//
// Express
// Setup NextJS
const app = next({ dev: true }); // dev, production=false
const handle = app.getRequestHandler();
const srv = express();

//
// 0MQ
// Fire up the tweet socket
const twtSock = zmq.socket("req");
// Fire up the I18N socket
const i18nSock = zmq.socket("req");

//
// Trap node errors... (Usually MaxListenersExceededWarning, which is because there's no remote socket connection)
process.on("warning", e => console.warn(e.stack));

//
//---------------------------------------
//          M A I N
//---------------------------------------
app
  .prepare()
  .then(() => {
    //--------------------------------------------
    // *** Express and 0MQ
    srv.listen(EPORT, err => {
      if (err) throw err;
      console.log("Listening on http://%s%s%s", ESRV, COLON, EPORT);
    });

    // Send request for tweets...
    srv.get("/socket/tweets", (req, res) => {
      console.log(
        "@@@@@@@ Fetching tweets for FE... ctryLang curr: %s, req: %s",
        AppContext.GetCtryLang(),
        req.query.locale
      );
      //
      // Do we already have the tweets?
      if (AppContext.GetCtryLang() !== req.query.locale) {
        // Now alter message handling (NASTY... but necessary 'cos 'sock'.on is async)
        twtSock.once("message", function(data) {
          // Set tweets in app context
          console.log("###> ", data.toString("utf8"));
          AppContext.SetCtryLang(req.query.locale);
          AppContext.SetTweets(JSON.parse(data.toString("utf8")));

          // Send to browser
          res.send(AppContext.GetTweets());
          console.log("From server ----> ", AppContext.GetTweets());
          res.end();
        });

        // Set message
        Message.SetMessageType(TWTCHAN);
        Message.SetMessage({ ctryLang: req.query.locale });
        // Get tweet cache and display
        twtSock.send(JSON.stringify(Message.Get()));
        //console.log("Sending::> ", JSON.stringify(Message.Get()));
      } else {
        // Cache set in 'once' above
        res.send(AppContext.GetTweets());
        console.log("Sending tweets *****> ", AppContext.GetTweets());
        res.end();
      }
    });

    // Send request for I18N stuff and then...
    // Multiple message type: mtype eg: accountTypeLocale, formValuesI18N
    srv.get("/socket/i18n", (req, res) => {
      //
      // Do we already have the i18n?
      if (AppContext.GetCtryLang() !== req.query.locale) {
        // Now alter message handling (NASTY... but necessary 'cos 'sock'.on is async)
        i18nSock.once("message", function(data) {
          // Set i18n in app context
          console.log("###> ", data.toString("utf8"));
          let i18nObj = JSON.parse(data.toString("utf8"));

          // Account types list
          AppContext.SetAccountTypeList(i18nObj.I18N.accountTypeList);
          // Account type locale
          AppContext.SetAccountTypeLocale(i18nObj.I18N.accountTypeLocale);
          // Reg form inp values
          AppContext.SetRegFormInputs(i18nObj.I18N.regFormInputs);
          // Reg form values
          AppContext.SetRefFormValues(i18nObj.I18N.regFormValues);
          // Error msgs
          AppContext.SetErrorMsgs(i18nObj.I18N.errorMsgs);

          // Send to browser
          res.send(AppContext.GetI18NObj());
          res.end();
        });

        // Set message
        Message.SetMessageType(I18NCHAN);
        Message.SetMessage({ ctryLang: req.query.locale });
        // Get tweet cache and display
        i18nSock.send(JSON.stringify(Message.Get()));
        //console.log("Sending::> ", JSON.stringify(Message.Get()));
      } else {
        // Cache set in 'once' above
        res.send(AppContext.GetI18NObj());
        res.end();
      }
    });

    // Everything else
    srv.get("*", (req, res) => {
      console.log("Srv get.....*");
      return handle(req, res);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
//--------------------------------------------

//--------------------------------------------
// *** Connect to backend server on startup ["en-GB" default]
try {
  // Connect to remote 'tweet server' and initiate cache
  const twtEE = twtSock.connect(ZMQ1URL);
  AppContext.SetTweetSockObj(twtSock, TWTCHAN);
  console.log("> Tweet requester connected to: ", ZMQ1URL);

  // Connect to remote 'tweet server' and initiate cache
  const i18nEE = i18nSock.connect(ZMQ2URL);
  AppContext.SetI18NSockObj(i18nSock, I18NCHAN);
  console.log("> I18N requester connected to: ", ZMQ2URL);

  //-----------[I18N]-------------------
  // First time round i18n cache
  i18nSock.once("message", function(data) {
    AppContext.SetCtryLang(BASELOCALE);
    AppContext.SetI18NObj(JSON.parse(data.toString("utf8")));
  });

  // Get default i18n cache (ensure cache not empty)
  Message.SetMessageType(I18NCHAN);
  Message.SetMessage({ ctryLang: BASELOCALE });
  //console.log("1. Sending::> ", JSON.stringify(Message.Get()));
  i18nSock.send(JSON.stringify(Message.Get()));
  //-----------[I18N]-------------------

  //-----------[Tweets]-----------------
  // First time round tweet cache
  twtSock.once("message", function(data) {
    const tweetObj = JSON.parse(data.toString("utf8"));
    console.log(">>>>>> ", tweetObj);
    AppContext.SetCtryLang(tweetObj.ctryLang);
    AppContext.SetSign(tweetObj.sign);
    AppContext.SetTweets(tweetObj.tweets);
    console.log("GetTweetObj:.:.:> ", AppContext.GetTweetObj());
  });

  // Get default tweet cache (ensure cache not empty)
  Message.SetMessageType(TWTCHAN);
  Message.SetMessage({ ctryLang: BASELOCALE });
  twtSock.send(JSON.stringify(Message.Get()));
  //-----------[Tweets]-----------------
} catch (err) {
  console.log("0MQ connect error: ", err);
}
//--------------------------------------------
