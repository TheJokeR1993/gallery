import api_photos from "../../api/api";
import { L_F_gallery } from "../../localForage/localForage";

const state_gallery = {
  page: 1,
  limit: 10,
  allPhoto: [],
  favorite: [],
};

const T = {
  FIRST_STATE: "FIRST_STATE",
  CHANGE_LIMIT: "CHANGE_LIMIT",
  CHANGE_PAGE: "CHANGE_PAGE",
  CHANGE_FAVORITE: "CHANGE_FAVORITE",
  CHANGE_URL: "CHANGE_URL",
};

const reducer_Gallery = (state = state_gallery, action) => {
  switch (action.type) {
    case T.CHANGE_URL:
      action.setSpiner(false);
      return {
        ...state,
        allPhoto: action.arr,
        limit: action.limit,
        page: action.page,
      };
    case T.FIRST_STATE:
      action.setSpiner(false);
      return action.arr
        ? {
            ...action.state,
            limit: action.arr[1],
            page: action.arr[0],
            allPhoto: action.arr[2],
          }
        : { ...action.state };

    case T.CHANGE_LIMIT:
      return { ...state, limit: action.limit, allPhoto: action.arr };
    case T.CHANGE_PAGE:
      return { ...state, page: action.page, allPhoto: action.arr };
    case T.CHANGE_FAVORITE:
      if (
        state.favorite.length &&
        state.favorite.find((i) => i.id == action.obj.id)
      ) {
        return {
          ...state,
          favorite: state.favorite.filter((i) => i.id !== action.obj.id),
        };
      } else {
        state.favorite.unshift({
          ...action.obj,
          blur: false,
          grayscale: false,
        });
        return state;
      }
    default:
      return state;
  }
};

const change_limit = (limit, arr) => ({ limit, arr, type: T.CHANGE_LIMIT });
export const R_F_change_limit = (page, limit) => (dispath) => {
  api_photos
    .photoLists(page, limit)
    .then((i) => dispath(change_limit(limit, i)));
};

const change_page = (page, arr) => ({ page, arr, type: T.CHANGE_PAGE });
export const R_F_change_page = (page, limit) => (dispath) => {
  api_photos.photoLists(page, limit).then((i) => dispath(change_page(page, i)));
};
const change_URL = (arr, page, limit, setSpiner) => ({
  arr,
  page,
  limit,
  setSpiner,
  type: T.CHANGE_URL,
});
const first_start = (state, setSpiner, arr) => ({
  state,
  setSpiner,
  arr,
  type: T.FIRST_STATE,
});

export const R_F_start = (arr, setSpiner) => (dispath) => {
  L_F_gallery.getItem().then((el) => {
    if (!el) {
      arr[0]
        ? api_photos
            .photoLists(arr[1], arr[0])
            .then((i) => dispath(change_URL(i, +arr[1], +arr[0], setSpiner)))
        : api_photos
            .photoLists(1, 10)
            .then((i) => dispath(change_URL(i, 1, 10, setSpiner)));
    } else {
      if (arr[0]) {
        if (el.page == arr[1] && el.limit == arr[0]) {
          dispath(first_start(el, setSpiner));
        } else {
          const arrNew = [arr[1], arr[0]];
          api_photos.photoLists(arr[1], arr[0]).then((i) => {
            arrNew.push(i);
            dispath(first_start(el, setSpiner, arrNew));
          });
        }
      } else {
        dispath(first_start(el, setSpiner));
      }
    }
  });
};

export const R_F_change_favorite = (obj) => ({ obj, type: T.CHANGE_FAVORITE });

export default reducer_Gallery;
