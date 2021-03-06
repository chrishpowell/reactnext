//-----------------------------------
//         Messaging FE/BE
//-----------------------------------

// Message
global.prediktMsg = {
  msgType: "msgType-eg:Tweets",
  message: { ctryLang: "locale-eg:un-UN" }
};

//
// Manage message/type
const Message = {
  Get: () => {
    return prediktMsg;
  },
  GetMessageType: () => {
    return prediktMsg.msgType;
  },
  SetMessageType: msgType => {
    prediktMsg.msgType = msgType;
  },
  GetMessage: () => {
    return prediktMsg.message;
  },
  SetMessage: message => {
    prediktMsg.message = message;
  },
  Dump: () => {
    return Object.entries(prediktMsg);
  }
};

module.exports = { Message };
