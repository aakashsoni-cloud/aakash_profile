import LargeList from "../hooks/use-callback";
import Navigation from "../navigation";
import ProgressBar from "../progressBar";

const Home = () => {
  const bars = [1, 5, 20, 50, 70, 100];

  return (
    <div>
      <Navigation />
      <h3>This is my work</h3>
      <span>Navigate to see all works</span>
      <div className="progress-bar">
        <h5>Progress Bar</h5>
        {bars.map((percentage, index) => {
          return <ProgressBar progress={percentage} key={index} />;
        })}
        <LargeList />
      </div>
    </div>
  );
};

export default Home;
