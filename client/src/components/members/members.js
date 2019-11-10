import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Members extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
        <div style={{ height: "75vh",
          flexDirection : "column"}} className="container valign-wrapper">

          <div className="row">
            <div className="col s12 left-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
              </h4>
            </div>
          </div>



          <div className="row">
            <div className="col s12 left-align">
              <div className="section no-pad-bot green lighten-5" id="index-banner">
                <div className="container">
                  <br/>
                  <h1 className="header center  green-text text-darken-3">Search members</h1>
                  <div className="row center">



                  </div>
                  <br/>

                </div>
              </div>
            </div>
          </div>

          <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable green accent-3"
          >
            Logout
          </button>

        </div>
    );
  }
}

Members.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Members);
