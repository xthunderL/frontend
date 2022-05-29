import React from "react";
import "./navMenu.css";

const NavMenuComponent = (props) => {
  const onLogout = (e) => {
    localStorage.removeItem("login");
    props.setSignedIn(false);
    window.location.href = "/";
  };
  console.log("", props.isSignedIn);
  if (props.isSignedIn) {
    return (
      <div className="nav">
        <nav class="menu">
          <div class="top">
            <span class="fa fa-user-o"></span>
            Dashboard Kit
          </div>

          <a href="/">Overview</a>
          <a href="/tickets">Tickets</a>
          <a href="#">Ideas</a>
          <a href="#">Contacts</a>
          <a href="#">Agents</a>
          <a href="#">Articles</a>
          <a href="#" id="a-settings">
            Settings
          </a>
          <a href="#">Subscripcion</a>
          <a href="#" onClick={onLogout}>
            Log out
          </a>
        </nav>
      </div>
    );
  } else return <></>;
};

export default NavMenuComponent;
