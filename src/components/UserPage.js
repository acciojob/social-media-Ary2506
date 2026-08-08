import React from "react";
import { useParams, Link } from "react-router-dom";
import { useAppState } from "../context/AppContext";

const UserPage = () => {
  const { userId } = useParams();
  const { users, posts } = useAppState();
  const user = users.find((u) => u.id === userId);
  const userPosts = posts.filter((post) => post.author === userId);

  return (
    <section>
      <h2>{user ? user.name : "Unknown user"}</h2>
      <ul>
        {userPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserPage;
