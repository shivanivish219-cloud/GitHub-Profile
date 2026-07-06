import { Outlet } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import {
  Nav,
  Logo,
  NavList,
  StyledNavLink,
  Main,
  ThemeButton,
} from "./Navbar.styles";
// import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Nav>
        <Logo>
          <FaGithub size={30} />
          <span>GitHub Profiler</span>
        </Logo>

        <NavList>
          <li>
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/search">Search</StyledNavLink>
          </li>
          {/* <li>
            <StyledNavLink to="/followers">Followers</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/following">Following</StyledNavLink>
          </li> */}
        </NavList>
        <ThemeButton onClick={toggleTheme}>
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </ThemeButton>
      </Nav>

      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Navbar;
