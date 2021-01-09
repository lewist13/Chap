import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
// Services
import __SessionStatus from "../services/index";
//Components
import Nav from "./Nav";

// Pages
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Server from "../pages/Server";

export default function Router(props) {
  const [username, setUsername] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [pageLoading, setPageLoading] = useState(false);

  const verifyTokenValid = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const session = await __SessionStatus();
        setAuthenticated(true);
        setCurrentUser(session.user);
        history.push(`/users/${session.user.id}`);
      } catch (error) {
        throw error;
      }
    }
  };

  const toggleAuthenticated = (value, user, currentUser) => {
    setAuthenticated(value);
    setCurrentUser(user);
    setUsername(currentUser);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setEmail("");
    setPassword("");
    setAuthenticated(false);
    localStorage.clear();
  };

  useEffect(() => {
    verifyTokenValid();
    setPageLoading(false);
  }, []);

  return (
    <div>
      <Nav
        logout={handleLogout}
        currentUser={currentUser}
        authenticated={authenticated}
      ></Nav>
      {pageLoading ? (
        <h3>...Loading Chap, please wait</h3>
      ) : (
        <Switch>
          <Route
            exact
            path="/"
            component={() => <LandingPage></LandingPage>}
          ></Route>
          <Route
            exact
            path="/signup"
            component={(props) => (
              <SignUp
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              ></SignUp>
            )}
          ></Route>
          <Route
            path="/login"
            component={(props) => (
              <SignIn
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                username={username}
                email={email}
                password={password}
                toggleAuthenticated={toggleAuthenticated}
                setAuthenticated={setAuthenticated}
                history={history}
                {...props}
              ></SignIn>
            )}
          ></Route>
          <Route
            exact
            path="/servers/:server_id"
            component={() => <Server />}
          ></Route>
        </Switch>
      )}
    </div>
  );
}
