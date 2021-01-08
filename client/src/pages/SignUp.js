import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { __CreateUser } from "../services/index";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

export default function Signup(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCurrentUser = {
      username: username,
      email: email,
      password: password,
    };
    try {
      await __CreateUser(newCurrentUser);
      props.setCurrentUser(newCurrentUser);
      history.push("/login");
    } catch (error) {
      throw error;
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>

          <div>
            <input
              placeholder="Username"
              username="username"
              value={username}
              onChange={handleUsername}
              type="text"
            ></input>
            <input
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmail}
              type="email"
            ></input>
            <input
              placeholder="Password"
              name="password"
              value={password}
              onChange={handlePassword}
              type="password"
            ></input>
            <button onClick={handleSubmit}>Sign Up</button>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "14px",
        backgroundColor: "black",
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: "#202225",
        color: "white",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#36393E",
        position: "absolute",
      },
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: "#7289da",
    },
    secondary: {
      main: "#3ca374",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },
});
