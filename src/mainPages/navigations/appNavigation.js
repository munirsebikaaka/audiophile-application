import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav>
      <NavLink to={"/"}>
        <img src="imgs/home/app-logo.png" alt="logo of the application" />
      </NavLink>
      <ul>
        <li>
          <NavLink to={"/ours"}>OUR COMPANY</NavLink>
        </li>
        <li>
          <NavLink to={"/location"}>LOCATIONS</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default AppNav;
