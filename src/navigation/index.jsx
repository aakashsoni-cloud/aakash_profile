// Navigation.jsx
import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-fixed">
      <nav className="nav-container">
        <div className="main-links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/todo">
            Todo
          </Link>
        </div>

        <div className="hamburger-menu">
          <button className="hamburger-btn" onClick={toggleMenu}>
            <span className={`line ${isOpen ? "open" : ""}`}></span>
            <span className={`line ${isOpen ? "open" : ""}`}></span>
            <span className={`line ${isOpen ? "open" : ""}`}></span>
          </button>

          <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
            <Link
              className="link"
              to="/tick-tac-toe"
              onClick={() => setIsOpen(false)}>
              TickTacToe
            </Link>
            <Link
              className="link"
              to="/traffic-light"
              onClick={() => setIsOpen(false)}>
              Traffic Light
            </Link>
            <Link
              className="link"
              to="/countdown-timer"
              onClick={() => setIsOpen(false)}>
              CountDown Timer
            </Link>
            <Link
              className="link"
              to="/date-input"
              onClick={() => setIsOpen(false)}>
              Date Input
            </Link>
            <Link
              className="link"
              to="/carousel"
              onClick={() => setIsOpen(false)}>
              Carousel
            </Link>
            <Link className="link" to="/stars" onClick={() => setIsOpen(false)}>
              Stars
            </Link>
            <Link
              className="link"
              to="/digital-clock"
              onClick={() => setIsOpen(false)}>
              DigitalClock
            </Link>
            <Link
              className="link"
              to="/file-explorer"
              onClick={() => setIsOpen(false)}>
              File Explorer
            </Link>
            <Link className="link" to="/cards" onClick={() => setIsOpen(false)}>
              Cards
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
