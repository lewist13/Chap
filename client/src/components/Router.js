import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
// Services
import __SessionStatus from "../services/index";
//Components
import Nav from "./Nav";
// Pages
import LandingPage from "../pages/LandingPage";

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
            path="/signup"
            component={() => <LandingPage></LandingPage>}
          ></Route>
        </Switch>
      )}
    </div>
  );
}
