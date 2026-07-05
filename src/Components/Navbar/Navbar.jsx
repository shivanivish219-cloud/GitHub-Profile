import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <h2>Github Profiler</h2>

        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          {/* <li>
            <NavLink to="/followers">Followers</NavLink>
          </li>
          <li>
            <NavLink to="/following">Following</NavLink>
          </li> */}
          <li>
            <NavLink to="/repositories">Repositories</NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
