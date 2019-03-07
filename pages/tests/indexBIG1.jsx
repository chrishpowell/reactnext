import doAsync from "../components/asyncfunc";

const BigIndex = props => {
  console.log("::> ", props);
  return null;
};

BigIndex.getInitialProps = async () => {
  await doAsync();
  console.log("...All done!");
  return { data: "data" };
};

export default BigIndex;
