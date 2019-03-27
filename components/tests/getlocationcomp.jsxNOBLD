let testData = { item1: "", item2: "" };

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

const getIPLocnSetCookie = async () => {
  var start = Date.now(),
    time;
  console.log(0);
  time = await doSomethingAsync();
  console.log(time - start);
  time = await doSomethingAsync();
  console.log(time - start);

  Object.assign(testData, { item1: "asdjajsdkhk", item2: "mmmmmmmmm" });
};

const GetLocationComp = props => {
  // Object.entries(props[0])
  console.log("::> ", props);

  return <h3>{/* {navCtry[0]} {navCtry[1].name} */}Test</h3>;
};

GetLocationComp.getInitialProps = async () => {
  console.log("...getInitialProps...");
  if (testData.item1 === "" && testData.item2 === "")
    await getIPLocnSetCookie();
  return testData;
};

export default GetLocationComp;
