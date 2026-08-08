import React from "react";
import { useAppState } from "../context/AppContext";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

const ReactionButtons = ({ post }) => {
  const { addReaction } = useAppState();

  return (
    <div className="reactions">
      {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
          key={name}
          type="button"
          className="reaction-button"
          onClick={() => addReaction(post.id, name)}
        >
          {emoji} {post.reactions[name]}
        </button>
      ))}
    </div>
  );
};

export default ReactionButtons;
