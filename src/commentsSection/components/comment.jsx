/* eslint-disable react/prop-types */
import "./comment.css";
const Comment = (props) => {
  const { data } = props;
  return (
    <div className="">
      {data.map((item) => {
        if (item.isMainComment) {
          return (
            <div key={item.key} className="">
              {item.replies.map((reply) => (
                <div key={reply.key} className="">
                  <Comment data={reply.replies} />
                </div>
              ))}
              <p className="">{item.comment}</p>
            </div>
          );
        } else {
          return (
            <div key={item.key} className="">
              <p className="">{item.comment}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Comment;
