import { useState } from "react";
import Navigation from "../navigation";
import "./index.css";
// import FeedbackSystem from "./CodeReviewFeedback";

const Cards = () => {
  const [upvoteValue, setUpvoteValue] = useState([
    {
      read: 0,
      perf: 0,
      secur: 0,
      docu: 0,
      test: 0,
    },
  ]);
  const [downvoteValue, setDownvoteValue] = useState([
    {
      read: 0,
      perf: 0,
      secur: 0,
      docu: 0,
      test: 0,
    },
  ]);

  const handleUpvote = (title) => {
    setUpvoteValue((prev) =>
      prev.map((item) => {
        if (title === "read") {
          return { ...item, [title]: item[title] + 1 };
        } else if (title === "perf") {
          return { ...item, [title]: item[title] + 1 };
        } else if (title === "secur") {
          return { ...item, [title]: item[title] + 1 };
        } else if (title === "docu") {
          return { ...item, [title]: item[title] + 1 };
        } else if (title === "test") {
          return { ...item, [title]: item[title] + 1 };
        }
      })
    );
  };

  const handleDownvote = (title) => {
    setDownvoteValue((prev) =>
      prev.map((item) => {
        if (title === "read") {
          return { ...item, [title]: item[title] + 1 };
        } else if (title === "perf") {
          return { ...item, [title]: item[title] + 1 };
        } else if (title === "secur") {
          return { ...item, [title]: item[title] + 1 };
        } else if (title === "docu") {
          return { ...item, [title]: item[title] + 1 };
        } else if (title === "test") {
          return { ...item, [title]: item[title] + 1 };
        }
      })
    );
  };

  return (
    <>
      <Navigation />

      <div className="my-0 mx-auto w-mx-1200">
        <div className="card-container">
          <div className="card">
            <h2>Readability</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid="upvote-btn-0"
                onClick={() => handleUpvote("read")}>
                👍 Upvote
              </button>
              <button
                className="py-10 px-15 danger"
                data-testid="downvote-btn-0"
                onClick={() => handleDownvote("read")}>
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid="upvote-count-0">
              Upvotes: <strong>{upvoteValue[0].read}</strong>
            </p>
            <p className="my-10 mx-0" data-testid="downvote-count-0">
              Downvotes: <strong>{downvoteValue[0].read}</strong>
            </p>
          </div>
          <div className="card">
            <h2>Performance</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid="upvote-btn-1"
                onClick={() => handleUpvote("perf")}>
                👍 Upvote
              </button>
              <button
                className="py-10 px-15 danger"
                data-testid="downvote-btn-1"
                onClick={() => handleDownvote("perf")}>
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid="upvote-count-1">
              Upvotes: <strong>{upvoteValue[0].perf}</strong>
            </p>
            <p className="my-10 mx-0" data-testid="downvote-count-1">
              Downvotes: <strong>{downvoteValue[0].perf}</strong>
            </p>
          </div>
          <div className="card">
            <h2>Security</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid="upvote-btn-2"
                onClick={() => handleUpvote("secur")}>
                👍 Upvote
              </button>
              <button
                className="py-10 px-15 danger"
                data-testid="downvote-btn-2"
                onClick={() => handleDownvote("secur")}>
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid="upvote-count-2">
              Upvotes: <strong>{upvoteValue[0].secur}</strong>
            </p>
            <p className="my-10 mx-0" data-testid="downvote-count-2">
              Downvotes: <strong>{downvoteValue[0].secur}</strong>
            </p>
          </div>
          <div className="card">
            <h2>Documentation</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid="upvote-btn-3"
                onClick={() => handleUpvote("docu")}>
                👍 Upvote
              </button>
              <button
                className="py-10 px-15 danger"
                data-testid="downvote-btn-3"
                onClick={() => handleDownvote("docu")}>
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid="upvote-count-3">
              Upvotes: <strong>{upvoteValue[0].docu}</strong>
            </p>
            <p className="my-10 mx-0" data-testid="downvote-count-3">
              Downvotes: <strong>{downvoteValue[0].docu}</strong>
            </p>
          </div>
          <div className="card">
            <h2>Testing</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid="upvote-btn-4"
                onClick={() => handleUpvote("test")}>
                👍 Upvote
              </button>
              <button
                className="py-10 px-15 danger"
                data-testid="downvote-btn-4"
                onClick={() => handleDownvote("test")}>
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid="upvote-count-4">
              Upvotes: <strong>{upvoteValue[0].test}</strong>
            </p>
            <p className="my-10 mx-0" data-testid="downvote-count-4">
              Downvotes: <strong>{downvoteValue[0].test}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
