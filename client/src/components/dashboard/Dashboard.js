import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  // onLogoutClick = e => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  // };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 left-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
            </h4>
          </div>
<br/><br/>
          <div className="section no-pad-bot orange lighten-5" id="index-banner">
            <div className="container">
              <br/>
                <h1 className="header center  orange-text text-darken-3">Starter Template</h1>
                <div className="row center">
                  <h5 className="header col s12 light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor</h5>
                </div>
                <div className="row center">
                  <a href="#" className="btn-large waves-effect waves-light orange darken-3">View more</a>
                </div>
                <br/>

            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center light-blue-text"><i className="fa fa-user-plus"/></h2>
              <h5 className="center">Feature two</h5>

              <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center"> <i className="fa fa-cogs"/></h2>
              <h5 className="center">Feature three</h5>

              <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
