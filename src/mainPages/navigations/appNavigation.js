import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const AppNav = ({ showLinks, setShowLinks }) => {
  const setShowLinksDefault = () => {
    setShowLinks(false);
  };
  return (
    <>
      <nav className="application-nav">
        <NavLink onClick={setShowLinksDefault} to={"/"}>
          <img src="imgs/home/app-logo.png" alt="logo of the application" />
        </NavLink>
        <ul className={showLinks ? "show-links" : "hide-links"}>
          <li onClick={setShowLinksDefault}>
            <NavLink className={"link"} to={"/ours"}>
              OUR COMPANY
            </NavLink>
          </li>
          <li onClick={setShowLinksDefault}>
            <NavLink className={"link"} to={"/location"}>
              LOCATIONS
            </NavLink>
          </li>
          <li onClick={setShowLinksDefault}>
            <NavLink className={"link"} to={"/contact"}>
              CONTACT
            </NavLink>
          </li>
        </ul>
        {showLinks ? (
          <IoClose className="control-btns" onClick={setShowLinksDefault} />
        ) : (
          <IoMenu className="control-btns" onClick={() => setShowLinks(true)} />
        )}
      </nav>
    </>
  );
};
export default AppNav;
