import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
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
                  <h1 className="header center  green-text text-darken-3">Ground-Up</h1>
                  <div className="row center">
                      <h5 className="header col s12 light">We can improve, so let's do it...from the ground up! <hr /> Click on Government Members + Bills Passed to begin learning about your representative community. Click on About Us to learn more.</h5>
                  </div>
                  <br/>

              </div>
          </div>
              </div>
          </div>

          <div className="row">
          <div className="col s12 m4">
              <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="fa fa-user-plus"/></h2>
                  <h5 className="center">Did You Know?</h5>

                  <p className="light">Historically, local election voter turnout is low. Roughly 1 in 5 people vote in their local elections. Yet local elections can be a litmus test for prospective national policy rollouts, as federal lawmakers observe what bills pass at the local level before creating and adapting federal policies.  
                  </p>
              </div>
          </div>

          <div className="col s12 m4">
              <div className="icon-block">
                  <h2 className="center"> <i className="fa fa-cogs"/></h2>
                  <h5 className="center">Policy: Local To Federal</h5>

                  <p className="light">Women's Suffrage, The Environmental Protection Agency, Marriage Equality and Minimum Wage were all local, grassroots policies before they were brought to the federal government's attention; the federal actions and policies behind them were seeded by local governments.
                  </p>
              </div>
          </div>
              <div className="col s12 m4">
                  <div className="icon-block">
                      <h2 className="center"> <i className="fa fa-cogs"/></h2>
                      <h5 className="center">We're Getting Better!</h5>

                      <p className="light">2018 was a historic year for voter turnout in local elections. Almost 50% of the people came out to vote, and the demographics were historic too. According to the U.S. Census Bureau, Millenials upped their share of total votes in local elections from 22% to 42%, Generations X and Z saw historic increases in their turnouts, and minorities voted in greater numbers than they previously had.
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
