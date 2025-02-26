// import { useState } from "react";
import Navigation from "../navigation";
const FeedbackSystem = () => {
  //   const cards = [
  //     "Readability",
  //     "Performance",
  //     "Security",
  //     "Documentation",
  //     "Testing",
  //   ];
  //   const [upvoteValue, setUpvoteValue] = useState({
  //     read: 0,
  //     perf: 0,
  //     secur: 0,
  //     docu: 0,
  //     test: 0,
  //   });
  //   const [downvoteValue, setDownvoteValue] = useState({
  //     read: 0,
  //     perf: 0,
  //     secur: 0,
  //     docu: 0,
  //     test: 0,
  //   });

  //   const handleUpvote = (title) => {
  //     setUpvoteValue(
  //       (prev) => console.log(prev.filter((item) => item === title))
  //       // prev.filter((item) => item === title)
  //     );
  //   };

  //   const handleDownvote = () => {
  //     setDownvoteValue((prev) => prev + 1);
  //   };

  return (
    //   cards.map((name, index) => (
    //     <FeedbackCard
    //       card={name}
    //       index={index}
    //       upvoteValue={upvoteValue}
    //       downvoteValue={downvoteValue}
    //       onUpvote={handleUpvote}
    //       onDownvote={handleDownvote}
    //     />
    //   ))
    // );

    <>
      <Navigation />
      {/* <div>
        <div>
          <div>
            <h2>Readability</h2>
            <div>
              <button data-testid="upvote-btn-0" onClick={handleUpvote("read")}>
                👍 Upvote
              </button>
              <button data-testid="downvote-btn-0" onClick={handleDownvote}>
                👎 Downvote
              </button>
            </div>
            <p data-testid="upvote-count-0">
              Upvotes: <strong>{upvoteValue}</strong>
            </p>
            <p data-testid="downvote-count-0">
              Downvotes: <strong>{downvoteValue}</strong>
            </p>
          </div>
        </div>
      </div> */}
      <div>Hi </div>
    </>
  );
};

export default FeedbackSystem;
