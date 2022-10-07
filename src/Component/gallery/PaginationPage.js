import { NavLink } from "react-router-dom";

const PaginationPage = ({ page, limit, R_F_change_page, max }) => {
  return (
    <div className="pagination">
      {page > 1 && (
        <NavLink
          to={`/?limit=${limit}&page=${page - 1}`}
          onClick={(e) => R_F_change_page(page - 1, limit)}
        >
          &#8656;
        </NavLink>
      )}

      <span>{page}</span>
      {max !== 0 && (
        <NavLink
          to={`/?limit=${limit}&page=${page + 1}`}
          onClick={(e) => R_F_change_page(page + 1, limit)}
        >
          &#8658;
        </NavLink>
      )}
    </div>
  );
};

export default PaginationPage;
