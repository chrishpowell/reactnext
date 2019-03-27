//-----------------------------------------
//         PAGE
//-----------------------------------------
import { Meta } from "./meta";
import { Footer } from "./footer";

//
//-----------------------------
//      M A I N
//-----------------------------
export const Page = ({ children, title = "Default title", isoCode }) => {
  return (
    <>
      <Meta title={title} />
      {children}
      <Footer />
    </>
  );
};
