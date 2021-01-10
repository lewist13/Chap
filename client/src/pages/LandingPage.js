import React from "react";
// import { Link } from "react-router-dom";
// import SignUp from "./SignUp";
import Server from "./Server";
import "../styles/App.css";

export default function ({ authenticated, currentUser, logout }) {
  return !authenticated && !currentUser ? (
    <div className="lpbody">
      <div className="signuplogin">
        <div className="signuploginfonts">Create</div>
        <div>Create a new account.</div>
        <a className="button" href="/signup">
          Create
        </a>
      </div>
      <div className="signuplogin">
        <div className="signuploginfonts">Login</div>
        <div>Sign into an existing account.</div>
        <a className="button" href="/login">
          Login
        </a>
      </div>
    </div>
  ) : (
    <div>{/* <Server /> */}</div>
  );
}
