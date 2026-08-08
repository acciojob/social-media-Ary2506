import React from "react";
import { useAppState } from "../context/AppContext";
import PostExcerpt from "./PostExcerpt";

const PostsPage = () => {
  const { posts } = useAppState();
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {orderedPosts.map((post) => (
        <PostExcerpt key={post.id} post={post} />
      ))}
    </section>
  );
};

export default PostsPage;
