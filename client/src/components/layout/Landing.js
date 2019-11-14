import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css"
// import "../jumbotron.css"

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
              <div className="row">
                  <div className="col s12 left-align" id="opacity">

                      <div className="section no-pad-bot green lighten-5" id="index-banner" style={{backgroundImage : `url("https://www.ppic.org/wp-content/uploads/Crowd-of-Diverse-People_800x528.jpg")`,
                          marginTop: "0px", backgroundSize: "cover", position: "relative"}}>
                          <div className="container">
                              <br/>
                              <h3 className="header center  green-text text-darken-3">Ground-Up</h3>
                              <img  alt="people"/>
                              <div className="row center">
                              </div>
                              <br/>

                          </div>
                      </div>
                  </div>
              </div>
              <h4>
              <b>Welcome to Ground-Up!</b>{" "} 
              <span style={{ fontFamily: "monospace" }}>  This app helps you follow local politics, allowing you to take part in shaping this country..from the ground up!</span> 
            </h4>

            <p className="flow-text grey-text text-darken-1">
              Register or log in below. If you don't want an account just yet, please use our demo account:<br/>
                demo@demo.com pass: welcomeDemo
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable green accent-3 accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
