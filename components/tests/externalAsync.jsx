// -------------------------------------
//         GET LOCATION COMP
// -------------------------------------

//-----------------------------------****
function timeoutPromise(time) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(Date.now());
    }, time);
  });
}

const doSomethingAsync = () => {
  return timeoutPromise(1000);
};
//------------------------------------***

//
//-----------------------------
//      M A I N
//-----------------------------
const doExternalAsync = async () => {
  await doSomethingAsync;
};

export default doExternalAsync;
