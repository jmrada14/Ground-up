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

    return (


        <div style={{ height: "75vh",
            flexDirection : "column"}} className="container valign-wrapper">
            <br/>
            <div className="row">
                <div className="col s12 left-align">
                    <div className="section no-pad-bot green lighten-5" id="index-banner">
                        <div className="container">
                            <br/>
                            <h1 className="header center  green-text text-darken-3">Ground-Up</h1>
                            <div className="row center">
                                <h5 className="header col s12 light">We can improve, so let's do it...from the ground up! Please search our database of active congress members, and learn about who is making decisions in your neighborhood.</h5>
                            </div>
                            <br/>

                        </div>
                    </div>
                </div>
            </div>

            <div className="input-field col s12">
                <select className="browser-default">
                    <option value="" disabled selected> Search Members </option>
                    <option value="1">All members</option>
                    <option value="2">Members by chamber</option>
                    <option value="3">Members by state</option>
                </select>
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
                Search
            </button>

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
