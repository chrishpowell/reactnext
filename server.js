//----------------------------------------
//      S E R V E R
//----------------------------------------
const express = require("express");
const next = require("next");
const zmq = require("zeromq");

// Context (I18N etc.)
import {
  UserContext,
  I18NaccountTypeLocale,
  I18NformValuesI18N,
  I18NinpValuesI18N,
  I18NErrorMsgs,
  I18NaccountTypeList
} from "./src/usercontext";

// Properties
const properties = require("java-properties");

// Read the properties file
const zmqProps = properties.of("./properties/zmq.properties");

// Colon in URL
const COLON = zmqProps.get("COLON");
// Express server port
const EPORT = zmqProps.get("EPORT");
// Express server
const ESRV = zmqProps.get("ESRV");
// Remote server
const RSRV = zmqProps.get("RSRV");
// Tweet socket port
const TPORT = zmqProps.get("TPORT");
// I18N port
const IPORT = zmqProps.get("IPORT");

// // Setup the tweet socket
const ZMQ1URL = zmqProps.get("ZMQ1URL");
const TWTCHAN = zmqProps.get("TWTCHAN");

// The I18N socket
const ZMQ2URL = zmqProps.get("ZMQ2URL");
const I18NBASE = zmqProps.get("I18NBASE");

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

// tweetObj (initial): 'blank' if no remote socket
let tweetObj = { sign: "", tweets: [] };

// I18N objects (initial), objs: array of locale objs
let localeObjs = { locale: "en-GB", objs: [] };

app
  .prepare()
  .then(() => {
    //--------------------------------------------
    // *** Express and 0MQ
    srv.listen(8888, () => {
      console.log("Listening on http://%s%s%s", ESRV, COLON, TPORT);
    });

    // Send request for tweets and then...
    srv.get("/socket/tweets", (req, res) => {
      // Get tweet cache and display
      twtSock.send(TWTCHAN);
      res.send(tweetObj);
    });
    // ...when 0MQ tweets are returned
    twtSock.on("message", data => {
      let horoTweets = data.toString("utf8");
      tweetObj = JSON.parse(horoTweets);
    });

    // Send request for I18N stuff and then...
    // Multiple message type: mtype eg: accountTypeLocale, formValuesI18N
    srv.get("/socket/i18n/:locale", (req, res) => {
      // Get i18n cache and display
      let locale = req.params.locale;
      i18nSock.send(locale);
      res.send(localeObjs);
    });
    // ...when 0MQ I18N details are returned
    i18nSock.on("message", data => {
      // Set of objs filling i18n objs
      localeObjs = JSON.parse(data.toString("utf8"));
      //console.log("...> ", localeObjs);

      // Home page

      // Home page content

      // Account types list
      I18NaccountTypeList.Set(localeObjs.accountTypeList);
      // Account type locale
      I18NaccountTypeLocale.Set(localeObjs.accountTypeLocale);
      // Reg form inp values
      I18NinpValuesI18N.Set(localeObjs.inpValuesI18N);
      // Reg form values
      I18NformValuesI18N.Set(localeObjs.formValuesI18N);
      // Error msgs
      I18NErrorMsgs.Set(localeObjs.errorMsgs);
    });

    // Home Page
    srv.get("/", (req, res) => {
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
  i18nSock.send(I18NBASE);
} catch (err) {
  console.log("0MQ I18N connect error: ", err);
}
//--------------------------------------------
