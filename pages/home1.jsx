// -------------------------------------
//           HOME PAGE
// -------------------------------------
import { useContext } from "react";
import { BrsContext } from "../components/context/brscontext1";
import { Home2 } from "./home2";

//
//------------------------------
//     M A I N
//------------------------------
export const Home = () => {
  const context = useContext(BrsContext);
  context.setLocale("en-GB");
  context.setTweets({ test1: "whoot whoot!", test2: "agenbite of inwit" });
  return (
    <>
      <h2>Home</h2>
      <Home2 />
    </>
  );
};
