import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ authenticated, currentUser, logout }) {
  return !authenticated && !currentUser ? (
    <div>
      <nav>
        <ul>
          <Link to="/"></Link>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    </div>
  ) : (
    <div>
      <nav>
        <ul>
          <Link to="/servers/add">Create Server</Link>
          <Link to="/" onClick={(e) => logout(e)}>
            <li>Logout</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
