import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css";
import Img from "../assets/dropdown3.png";

export default function Nav({ authenticated, currentUser, logout }) {
  return !authenticated && !currentUser ? (
    <div></div>
  ) : (
    <div>
      <h3 className="chap left-align">Chap</h3>
      <nav className="navbar purple">
        <a class="dropdown-trigger btn yellow" href="#" data-target="dropdown1">
          <img src={Img} alt="image"></img>
        </a>
        <ul id="dropdown1" class="dropdown-content">
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
