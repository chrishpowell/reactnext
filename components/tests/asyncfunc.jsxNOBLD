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

const doAsync = async () => {
  var start = Date.now(),
    time;
  console.log(0);
  time = await doSomethingAsync();
  console.log(time - start);
  time = await doSomethingAsync();
  console.log(time - start);
};

export default doAsync;
