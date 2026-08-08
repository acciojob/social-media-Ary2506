import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <React.Fragment>
      <h1>GenZ</h1>
      <nav>
        <Link to="/">Posts</Link>
        <Link to="/users">Users</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/addPost">Add Post</Link>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
