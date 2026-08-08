import React from "react";
import { useAppState } from "../context/AppContext";

const PostAuthor = ({ userId }) => {
  const { users } = useAppState();
  const author = users.find((user) => user.id === userId);

  return (
    <span className="post-author">
      by {author ? author.name : "Unknown author"}
    </span>
  );
};

export default PostAuthor;
