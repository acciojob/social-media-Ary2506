import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";

const PostExcerpt = ({ post }) => (
  <article className="post-excerpt">
    <h3>{post.title}</h3>
    <PostAuthor userId={post.author} />
    <p className="post-content">{post.content}</p>
    <ReactionButtons post={post} />
    <Link className="button" to={`/posts/${post.id}`}>
      View Post
    </Link>
  </article>
);

export default PostExcerpt;
