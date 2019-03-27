// -------------------------------------
//           NAV
// -------------------------------------
import Link from "next/link";

//
// - Nav Links
const links = [
  { href: "https://en.wikipedia.org/wiki/Astrology", label: "Definition" },
  { href: "/help", label: "Help" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

//
//-----------------------------
//      M A I N
//-----------------------------
export const Nav = props => {
  return (
    <nav style={props.style}>
      <ul>
        <li>
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </li>
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>

      <style jsx>{`
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #311b92;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </nav>
  );
};
