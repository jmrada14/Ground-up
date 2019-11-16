import React, { Component } from "react";
import {Navbar, NavItem} from "react-materialize";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class NavBar extends Component { onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
};
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
            <NavItem
              >
                Logout
            </NavItem>
        </Navbar>
    );
  }
}

NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(NavBar);

