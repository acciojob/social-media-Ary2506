import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../context/AppContext";

const AddPostForm = () => {
  const { users, addPost } = useAppState();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(users[0] ? users[0].id : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author) return;

    addPost(title.trim(), content.trim(), author);
    setTitle("");
    setContent("");
    navigate("/");
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

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
    </section>
  );
};

export default AddPostForm;
