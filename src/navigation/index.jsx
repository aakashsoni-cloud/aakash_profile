import "./index.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    // <div className="main-container">
    <div className="link-container">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/todo">
        Todo
      </Link>
      <Link className="link" to="/tick-tac-toe">
        TickTacToe
      </Link>
      <Link className="link" to="/traffic-light">
        Traffic Light
      </Link>
      <Link className="link" to="/countdown-timer">
        CountDown Timer
      </Link>
      <Link className="link" to="/date-input">
        Date Input
      </Link>
      <Link className="link" to="/carousel">
        Carousel
      </Link>
      <Link className="link" to="/stars">
        Stars
      </Link>
    </div>
    // </div>
  );
};

export default Navigation;
