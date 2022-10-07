import { connect } from "react-redux";
import { useMemo } from "react";
import PhotoItem from "../gallery/PhotoItem";
import { R_F_change_favorite } from "../../redux/gallery/reduce_Gallery";
const mapStateToProps = (state) => {
  return {
    favorite: state.reducer_Gallery.favorite,
  };
};

const Favorite = ({ favorite, R_F_change_favorite }) => {
  const look_photo = useMemo(() => {
    return favorite.map((i) => {
      return (
        <PhotoItem
          key={i.id}
          item={i}
          R_F_change_favorite={R_F_change_favorite}
          favorite={true}
        />
      );
    });
  }, [favorite]);
  return (
    <div className="gallery">
      <div className="gallery_item">{look_photo}</div>
    </div>
  );
};

export default connect(mapStateToProps, { R_F_change_favorite })(Favorite);
