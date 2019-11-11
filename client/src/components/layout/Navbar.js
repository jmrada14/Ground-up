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
                Government members
            </NavItem>
            <NavItem href="/bills">
                Bills passed
            </NavItem>
            <NavItem href="/about">
                About us
            </NavItem>
            <NavItem href="/api-access">
                API
            </NavItem>
        </Navbar>
    );
  }
}

export default NavBar;
