import React, { useState } from "react";
import React, { useHistory } from "react-router-dom";
import { __CreateUser } from "../services/index";

export default function Signup(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleInput = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
    setEmail(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    props.setUser(newUser);
    try {
      await __CreateUser(newUser);
      history.push("/login");
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div>
          <input
            placeholder="Username"
            username="username"
            value={username}
            onChange={handleInput}
            type="text"
          ></input>
          <input
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInput}
            type="email"
          ></input>
          <input
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInput}
            type="password"
          ></input>
          <button onClick={handleSubmit}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}
