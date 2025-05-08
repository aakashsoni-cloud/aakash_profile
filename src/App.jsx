import "./App.css";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Todo from "./todo";
import TrafficLight from "./traffic-light";
import DateInput from "./date-input";
import CountDownTimer from "./countdown-timer";
import Carousel from "./carousel";
import StarComponent from "./stars";
import TickTacToe from "./tick-tac-toe";
import Cards from "./cards";
import DigitalClock from "./digital-clock";
import FileExplorer from "./file-explorer";
import LearnCountDownTimer from "./allComponents/learnCountDownTimer";
import GridFlex from "./allComponents/gridFlex";
import OTPComponent from "./otp";
import CommentsSection from "./commentsSection";
import HookePage from "./hooksPage";
import ThemeSwitcher from "./hooksPage/useContext-theme-switcher";

function App() {
  // const TrafficLight = lazy(() => import("./traffic-light"));
  // const DateInput = lazy(() => import("./date-input"));
  // const CountDownTimer = lazy(() => import("./countdown-timer"));
  // const LearnCountDownTimer = lazy(() =>
  //   import("./allComponents/countDownTimer")
  // );
  // const Carousel = lazy(() => import("./carousel"));
  // const StarComponent = lazy(() => import("./stars"));
  // const TickTacToe = lazy(() => import("./tick-tac-toe"));
  // const Cards = lazy(() => import("./cards"));
  // const DigitalClock = lazy(() => import("./digital-clock"));
  // const FileExplorer = lazy(() => import("./file-explorer"));

  return (
    <Router>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/traffic-light" element={<TrafficLight />} />
          <Route path="/tick-tac-toe" element={<TickTacToe size={5} />} />
          <Route path="/date-input" element={<DateInput />} />
          <Route path="/countdown-timer" element={<CountDownTimer />} />
          <Route path="/countdown-timer" element={<CountDownTimer />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/stars" element={<StarComponent startCount={10} />} />
          <Route path="/digital-clock" element={<DigitalClock />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/hooks" element={<HookePage />} />
          <Route path="/file-explorer" element={<FileExplorer />} />
          <Route path="/otp" element={<OTPComponent size={6} />} />

          <Route
            path="/learn-countdown-timer"
            element={<LearnCountDownTimer />}
          />
          <Route path="/comments" element={<CommentsSection />} />
          <Route path="/grid-flex" element={<GridFlex />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
