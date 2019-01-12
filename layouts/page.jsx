import Meta from "../components/meta";
import Header from "../components/header";
import Footer from "../components/footer";
import Nav from "../components/nav";

const Page = ({ children, title = "Default title" }) => (
  <>
    <Meta title={title} />
    <Header />
    <Nav />
    {children}
    <Footer />
  </>
);

export default Page;
