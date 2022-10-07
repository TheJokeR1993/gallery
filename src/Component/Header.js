import { NavLink } from "react-router-dom";
const Header = ({ limit, page }) => {
  return (
    <header className="header">
      <NavLink to={`/?limit=${limit}` + `&page=${page}`}> gallery</NavLink>
      <NavLink to="favorite">favorite</NavLink>
    </header>
  );
};

export default Header;
