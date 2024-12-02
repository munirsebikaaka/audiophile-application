import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const DetailsNav = () => {
  return (
    <nav className="details-nav">
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
      <IoCartOutline className="icon" />
    </nav>
  );
};
export default DetailsNav;
