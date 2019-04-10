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
import { Message } from "../components/messaging/messaging.jsx";
// Context (App)
import { AppContext } from "../components/context/AppContext";

// Context (I18N etc.)
import {
  UserContext,
  I18NaccountTypeLocale,
  I18NformValuesI18N,
  I18NinpValuesI18N,
  I18NErrorMsgs,
  I18NaccountTypeList
} from "../components/context/usercontext";

// Setup the tweet socket
const ZMQ1URL = zmqProps.get("ZMQ1URL");
const TWTCHAN = zmqProps.get("TWTCHAN");

// The I18N socket
const ZMQ2URL = zmqProps.get("ZMQ2URL");
const I18NCHAN = zmqProps.get("I18NCHAN");

// Server setup
const TPORT = zmqProps.get("TPORT");
const ESRV = zmqProps.get("ESRV");
const COLON = zmqProps.get("COLON");

//
// Express
// Setup NextJS
const app = next(true); // dev, production=false
const handle = app.getRequestHandler();
const srv = express();

//
// 0MQ
// Fire up the tweet socket
const twtSock = zmq.socket("req");
// Fire up the I18N socket
const i18nSock = zmq.socket("req");

//
//---------------------------------------
//          M A I N
//---------------------------------------
app
  .prepare()
  .then(() => {
    //--------------------------------------------
    // *** Express and 0MQ
    srv.listen(TPORT, err => {
      if (err) throw err;
      console.log("Listening on http://%s%s%s", ESRV, COLON, TPORT);
    });

    // Send request for tweets...  (*** I18N test ***)
    srv.get("/socket/tweets/:locale", (req, res) => {
      //
      // Do we already have the tweets?
      if (AppContext.GetCtryLang() !== req.params.locale) {
        // Now alter message handling (NASTY... but necessary 'cos 'sock'.on is async)
        twtSock.once("message", function(data) {
          // Set tweets in app context
          //console.log("###> ", data.toString("utf8"));
          AppContext.SetTweets(JSON.parse(data.toString("utf8")));

          // Send to browser
          res.send(AppContext.GetTweets());
          res.end();
        });

        // Set message
        Message.SetMessageType(TWTCHAN);
        Message.SetMessage({ ctryLang: req.params.locale });
        // Get tweet cache and display
        twtSock.send(JSON.stringify(Message.Get()));
        //console.log("Sending::> ", JSON.stringify(Message.Get()));
      } else {
        // Cache set in 'once' above
        res.send(AppContext.GetTweets());
        res.end();
      }
    });

    // Send request for I18N stuff and then...
    // Multiple message type: mtype eg: accountTypeLocale, formValuesI18N
    // Send request for i18n...  (*** I18N test ***)
    srv.get("/socket/i18n/:locale", (req, res) => {
      //
      // Do we already have the i18n?
      if (AppContext.GetCtryLang() !== req.params.locale) {
        // Now alter message handling (NASTY... but necessary 'cos 'sock'.on is async)
        i18nSock.once("message", function(data) {
          // Set i18n in app context
          console.log("###> ", data.toString("utf8"));
          let i18nObj = JSON.parse(data.toString("utf8"));

          // Account types list
          I18NaccountTypeList.Set(i18nObj.I18N.accountTypeList);
          // Account type locale
          I18NaccountTypeLocale.Set(i18nObj.I18N.accountTypeLocale);
          // Reg form inp values
          I18NinpValuesI18N.Set(i18nObj.I18N.regFormInputs);
          // Reg form values
          I18NformValuesI18N.Set(i18nObj.I18N.regFormValues);
          // Error msgs
          I18NErrorMsgs.Set(i18nObj.I18N.errorMsgs);

          // Send to browser
          res.send(AppContext.GetI18NObj());
          res.end();
        });

        // Set message
        Message.SetMessageType(I18NCHAN);
        Message.SetMessage({ ctryLang: req.params.locale });
        // Get tweet cache and display
        i18nSock.send(JSON.stringify(Message.Get()));
        //console.log("Sending::> ", JSON.stringify(Message.Get()));
      } else {
        // Cache set in 'once' above
        res.send(AppContext.GetI18NObj());
        res.end();
      }
    });

    // Home Page
    srv.get("/", (req, res) => {
      // Home page

      // Home page content
      res.send("Hello World");
    });

    // Everything else
    server.get("*", (req, res) => {
      console.log("Srv get.....<");
      return handle(req, res);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
//--------------------------------------------

//--------------------------------------------
// *** Connect to backend server on startup
// Connect to remote 'tweet server' and initiate cache
try {
  const zmqEE = twtSock.connect(ZMQ1URL);
  //console.log("..> connect emitter event = ", zmqEE);

  // Get tweet cache (ensure cache not empty)
  twtSock.send(TWTCHAN);
} catch (err) {
  console.log("0MQ TWT connect error: ", err);
}

// Connect to remote 'i18n server', load initial i18n objs
try {
  const zmqEE = i18nSock.connect(ZMQ2URL);
  //console.log("..> connect emitter event = ", zmqEE);

  // Get i18n cache (ensure cache not empty)
  i18nSock.send(I18NCHAN);
} catch (err) {
  console.log("0MQ I18N connect error: ", err);
}
//--------------------------------------------
