import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav className="app-nav">
      <h1>audiophile</h1>
      <ul>
        <li>
          <NavLink className="nav-link" to={"/"}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={"/headPs"}>
            HEADPHONES
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={"/speakers"}>
            SPEAKERS
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={"/ears"}>
            EARPHONES
          </NavLink>
        </li>
      </ul>
      <p>icon</p>
    </nav>
  );
};
export default AppNav;
