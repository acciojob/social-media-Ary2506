import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppState } from "../context/AppContext";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";

const SinglePostPage = () => {
  const { postId } = useParams();
  const { posts, updatePost } = useAppState();
  const post = posts.find((p) => p.id === postId);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  if (!post) {
    return <section>Post not found</section>;
  }

  const handleSave = (e) => {
    e.preventDefault();
    updatePost(post.id, title.trim() || post.title, content.trim());
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <article className="post">
        <form onSubmit={handleSave}>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button type="submit" className="button">
            Save Post
          </button>
        </form>
      </article>
    );
  }

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <PostAuthor userId={post.author} />
      <p className="post-content">{post.content}</p>
      <ReactionButtons post={post} />
      <button className="button" onClick={() => setIsEditing(true)}>
        Edit Post
      </button>
    </article>
  );
};

export default SinglePostPage;
