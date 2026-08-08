import React from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../context/AppContext";

const UsersList = () => {
  const { users } = useAppState();

  return (
    <section>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
