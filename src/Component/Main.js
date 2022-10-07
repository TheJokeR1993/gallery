import { Route, Routes } from "react-router-dom";
import Favorite from "./favorite/Favorite";
import Gallery from "./gallery/Gallery";
const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="*" element={<Gallery />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
};

export default Main;
