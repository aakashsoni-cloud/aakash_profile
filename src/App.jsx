import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";

function App() {
  const Todo = lazy(() => import("./todo"));
  const TrafficLight = lazy(() => import("./traffic-light"));
  const DateInput = lazy(() => import("./date-input"));
  const CountDownTimer = lazy(() => import("./countdown-timer"));
  const Carousel = lazy(() => import("./carousel"));
  const StarComponent = lazy(() => import("./stars"));
  const TickTacToe = lazy(() => import("./tick-tac-toe"));
  const Cards = lazy(() => import("./cards"));
  const DigitalClock = lazy(() => import("./digital-clock"));
  const FileExplorer = lazy(() => import("./file-explorer"));

  return (
    <Router>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/traffic-light" element={<TrafficLight />} />
          <Route path="/tick-tac-toe" element={<TickTacToe size={5} />} />
          <Route path="/date-input" element={<DateInput />} />
          <Route path="/countdown-timer" element={<CountDownTimer />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/stars" element={<StarComponent startCount={10} />} />
          <Route path="/digital-clock" element={<DigitalClock />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/file-explorer" element={<FileExplorer />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
