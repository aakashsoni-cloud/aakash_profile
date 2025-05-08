import Navigation from "../../navigation";
import "./index.css";
const GridFlex = () => {
  return (
    <div>
      <Navigation />
      <div className="main-container-box">
        <div className="sub-container-grid">
          <div className="item1"></div>
          <div className="item1"></div>
          <div className="item1"></div>
        </div>

        <div className="sub-container-flex">
          <div className="item1"></div>
          <div className="item1"></div>
        </div>
      </div>
    </div>
  );
};

export default GridFlex;
