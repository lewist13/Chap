import React, { useState } from "react";
import { __Login } from "../services/index";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usernameInput = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const emailInput = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const passwordInput = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const userInfo = {
        username: username,
        email: email,
        password: password,
      };
      const signIn = await __Login(userInfo);
      props.toggleAuthenticated(true, signIn.user.id);
      props.setAuthenticated(true);
      props.setCurrentUser(signIn.user);
      props.history.push(`/users/${signIn.user.id}`);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return !props.authenticated && !props.currentUser ? (
    <div>
      <form>
        <h3>Sign In</h3>
        <input
          placeholder="Username"
          name="username"
          value={username}
          onChange={usernameInput}
          type="username"
        ></input>
        <input
          placeholder="Email"
          name="email"
          value={email}
          onChange={emailInput}
          type="email"
        ></input>
        <input
          placeholder="Password"
          name="password"
          value={password}
          onChange={passwordInput}
          type="password"
        ></input>
        <button onClick={loginHandler}>Login</button>
      </form>
    </div>
  ) : (
    <h3>Sorry, you are already signed in :(</h3>
  );
}
