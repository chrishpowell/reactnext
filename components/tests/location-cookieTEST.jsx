// -------------------------------------
//         GET LOCATION COMP
// -------------------------------------
//import logger from "./loggingTEST";

function scaryClown() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("🤡");
    }, 2000);
  });
}

//
//-----------------------------
//      M A I N
//-----------------------------
const getScaryClown = async () => {
  await scaryClown().then(console.log("Scary clown!!"));
};

export default getScaryClown;
