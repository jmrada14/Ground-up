import React, { Component } from "react";
import {Navbar, NavItem} from "react-materialize";

class NavBar extends Component {
  render() {
    return (
        <Navbar className={"green accent-3"} brand={<a />} alignLinks="right">
            <NavItem href="">
                Getting started
            </NavItem>
            <NavItem href="components.html">
                Components
            </NavItem>
        </Navbar>
    );
  }
}

export default NavBar;
