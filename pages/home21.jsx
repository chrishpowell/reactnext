// -------------------------------------
//           HOME21 PAGE
// -------------------------------------
import { useContext } from "react";
import { BrsContext } from "../components/context/brscontext1";

const TestCtx = ({ testObj }) => {
  return (
    <p>
      Testobj: {testObj.test1}, {testObj.test2}
    </p>
  );
};

export const Home21 = () => {
  const context = useContext(BrsContext);

  return (
    <>
      <h2>Home21</h2>
      <TestCtx testObj={(() => context.getTweets())()} />
    </>
  );
};
