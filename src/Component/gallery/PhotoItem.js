import { useState } from "react";
import icon_black from "../../img/icon_black.png";
import icon_red from "../../img/icon_red.png";

const PhotoItem = (props) => {
  const [fav, setFav] = useState(props.favorite);
  const [show, setShow] = useState(false);

  const size = ["", ""];

  if (props.item.width > props.item.height) {
    let arr = props.item.width / props.item.height;
    size[0] = 550;
    size[1] = Math.floor(550 / arr);
  } else {
    let arr = props.item.height / props.item.width;
    size[1] = 550;
    size[0] = Math.floor(550 / arr);
  }

  return (
    <div className="photo_item">
      <img
        onClick={() => {
          document.body.style.overflow = "hidden";
          setShow(!show);
        }}
        alt=""
        src={`https://picsum.photos/id/${props.item.id}/${size[0]}/${size[1]}.webp`}
      />
      <div className="item_info">
        <p>{props.item.author}</p>

        <img
          onClick={() => {
            props.R_F_change_favorite(props.item);
            setFav(!fav);
          }}
          src={fav ? icon_red : icon_black}
        />
      </div>
      {show && (
        <div
          className="show"
          onClick={() => {
            document.body.style.overflow = "auto";
            setShow(!show);
          }}
        >
          <div>
            <img
              alt=""
              src={`https://picsum.photos/id/${props.item.id}/${props.item.width}/${props.item.height}.webp`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoItem;
