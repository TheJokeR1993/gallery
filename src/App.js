import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "./Component/Header";
import Main from "./Component/Main";
import { R_F_start } from "./redux/gallery/reduce_Gallery";

const mapStateToProps = (state) => {
  return {
    reducer_Gallery: state.reducer_Gallery,
  };
};

const App = ({ reducer_Gallery, R_F_start }) => {
  const loook_setting = useLocation()
    .search.split("&")
    .map((i) => (i ? i.split("=")[1] : false));

  const [spiner, setSpiner] = useState(true);
  useEffect(() => {
    !loook_setting
      ? R_F_start(reducer_Gallery.page, reducer_Gallery.limit, setSpiner)
      : R_F_start(loook_setting, setSpiner);
  }, []);
  if (spiner)
    return (
      <img
        className="spiner"
        alt="spiner"
        src="https://miro.medium.com/max/1400/1*e_Loq49BI4WmN7o9ItTADg.gif"
      />
    );
  return (
    <>
      <Header limit={reducer_Gallery.limit} page={reducer_Gallery.page} />
      <Main />
    </>
  );
};

export default connect(mapStateToProps, { R_F_start })(App);
