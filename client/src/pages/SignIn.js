import React, { useState } from "react";
import { __Login } from "../services/index";
import { LoginUser } from "../store/actions/UserActions";
import { connect } from "react-redux";

const state = ({}) => {
  return {};
};

const actions = (dispatch) => {
  return {
    loginUser: (formData) => dispatch(LoginUser(formData)),
  };
};

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, username, password);
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

  const loginHandler = (e) => {
    e.preventDefault();
    try {
      const userInfo = {
        username: username,
        email: email,
        password: password,
      };
      const signIn = props.loginUser(userInfo);
      // props.toggleAuthenticated(true, signIn.user.id);
      // props.setAuthenticated(true);
      // props.setCurrentUser(signIn.user);
      props.history.push(`/servers`);
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
          type="text"
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
    <h3>Sorry, you are already signed in</h3>
  );
}

export default connect(state, actions)(SignIn);
