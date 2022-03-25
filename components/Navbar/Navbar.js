import { useState, useEffect } from "react";
import {
  Header,
  Nav,
  Logo,
  NavThemeButton,
  NavMenu,
  NavbarList,
  NavbarLink,
} from "./styledNavbar";

export const Navbar = ({ data, toggleTheme, checkTheme }) => {
  const [navShadow, setNavShadow] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleNavShadow = () =>
    window.scrollY > 10 ? setNavShadow(true) : setNavShadow(false);

  useEffect(() => {
    window.addEventListener("scroll", handleNavShadow);
  }, []);

  const navbarLinks = data.links.map((link) => (
    <li key={link.id}>
      <NavbarLink
        href={link.href}
        onClick={() => setActiveLink(link.id)}
        className={link.id === activeLink && "active"}
      >
        <i className={link.icon}></i>
      </NavbarLink>
      {/* <p>{link.title}</p> */}
    </li>
  ));

  return (
    <Header navShadow={navShadow}>
      <Nav>
        <Logo>{data.name}</Logo>
        <NavMenu>
          <NavbarList>{navbarLinks}</NavbarList>
        </NavMenu>
        <NavThemeButton>
          {toggleTheme === "dark" ? (
            <i className="bx bx-sun" onClick={checkTheme}></i>
          ) : (
            <i className="bx bx-moon" onClick={checkTheme}></i>
          )}
        </NavThemeButton>
      </Nav>
    </Header>
  );
};
