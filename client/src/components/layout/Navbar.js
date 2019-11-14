import React, { Component } from "react";
import {Navbar, NavItem} from "react-materialize";

class NavBar extends Component {
  render() {
    return (
        <Navbar className={"green accent-3"} brand={<a />} alignLinks="right">
            <NavItem href="/dashboard">
                Home
            </NavItem>
            <NavItem href="/members">
                Government Members
            </NavItem>
            <NavItem href="/bills">
                Bills Passed
            </NavItem>
            <NavItem href="/about">
                About Us
            </NavItem>
            <NavItem href="/apidocs">
                API
            </NavItem>
        </Navbar>
    );
  }
}

export default NavBar;
