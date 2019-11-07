import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <nav className={"green accent-4"} style={{"margin-bottom" : "10%"}}>
          <div className="nav-wrapper">
            <a style={{left: "3%"}} href="#" className="brand-logo">Ground Up</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#">Members</a></li>
              <li><a href="#">Bills</a></li>
              <li><a href="#">About us</a></li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;
