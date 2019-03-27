// -------------------------------------
//           NAVBAR
// -------------------------------------
import Nav from "./nav";

//
//-----------------------------
//      M A I N
//-----------------------------
const Navbar = () => {
  return (
    <nav>
      <div>
        <Nav />
      </div>

      <style jsx>{`
        nav {
          text-align: center;
          border-top: 1px solid #c39bd3;
          border-bottom: 1px solid #c39bd3;
          background: #d7bde2;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
