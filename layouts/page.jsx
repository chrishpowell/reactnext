import Meta from "../components/meta";
import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

//
//-----------------------------
//      M A I N
//-----------------------------
const Page = ({ children, title = "Default title", isoCode }) => {
  return (
    <>
      <Meta title={title} />
      <Header />
      <Navbar isoCode={isoCode} />
      {children}
      <Footer />
    </>
  );
};

export default Page;
