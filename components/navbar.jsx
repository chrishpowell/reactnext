// -------------------------------------
//           NAVBAR
// -------------------------------------
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Predikt.IO</a>
        <span className="right">
          <Link href="/home">
            <a>Home </a>
          </Link>
          <Link href="/about">
            <a>About </a>
          </Link>
          <Link href="/contact">
            <a>Contact </a>
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
