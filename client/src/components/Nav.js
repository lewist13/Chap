import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css";

export default function Nav({ authenticated, currentUser, logout }) {
  return !authenticated && !currentUser ? (
    <div>
      <nav>
        <a class="dropdown-trigger btn" href="#" data-target="dropdown1">
          <img src="./assets/dropdown2.png" />
        </a>
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li class="divider" tabindex="-1"></li>
          <li>
            <Link to="/login">Login</Link>
          </li>
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

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".dropdown-trigger");
  const instances = M.Dropdown.init(elems, {});
});
