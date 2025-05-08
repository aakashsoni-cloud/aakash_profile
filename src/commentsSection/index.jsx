import Navigation from "../navigation";
import "./index.css";
import commentData from "./data/commentData";
import Comment from "./components/comment";

const CommentsSection = () => {
  return (
    <div className="">
      <Navigation />
      <Comment data={commentData} />
    </div>
  );
};

export default CommentsSection;
