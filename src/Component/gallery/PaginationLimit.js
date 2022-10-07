import { NavLink } from "react-router-dom";

const PaginationLimit = ({ page, limit, R_F_change_limit }) => {
  return (
    <div className="nav_limit">
      <NavLink
        className={limit == 10 ? "actives" : ""}
        to={`/?limit=10&page=${page}`}
        onClick={(e) => R_F_change_limit(page, +e.target.innerHTML)}
      >
        10
      </NavLink>
      <NavLink
        className={limit == 25 ? "actives" : ""}
        to={`/?limit=25&page=${page}`}
        onClick={(e) => {
          R_F_change_limit(page, +e.target.innerHTML);
        }}
      >
        25
      </NavLink>
      <NavLink
        className={limit == 50 ? "actives" : ""}
        to={`/?limit=50&page=${page}`}
        onClick={(e) => R_F_change_limit(page, +e.target.innerHTML)}
      >
        50
      </NavLink>
    </div>
  );
};

export default PaginationLimit;
