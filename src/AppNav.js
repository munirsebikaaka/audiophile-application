import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const AppNav = () => {
  return (
    <div className="app-nav-cell">
      <nav className="app-nav">
        <h2>audiophile</h2>
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
        <IoCartOutline className="icon" />
        <NavLink to={"/login"} className="see-products">
          CHECKOUT
        </NavLink>
      </nav>
    </div>
  );
};
export default AppNav;
