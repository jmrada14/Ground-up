import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import API from "../../utils/MembersAPI"
import MemberCard from "./cards"


class Members extends Component {
    state = {
        members : []
    };
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
      API.getAllMembers()
          .then(data => {
              this.setState({members: data.data});
              console.log(this.state.members)
          })
          .catch(err => {console.log(err)})


  }

    render() {

    return (


        <div style={{ height: "75vh",
            flexDirection : "column"}} className="container">
            <br/>
            <div className="row">
                <div className="col s12 left-align">
                    <div className="section no-pad-bot green lighten-5" id="index-banner">
                        <div className="container">
                            <br/>
                            <h1 className="header center  green-text text-darken-3">Ground-Up</h1>
                            <div className="row center">
                                <h5 className="header col s12 light">We can improve, so let's do it...from the ground up! <hr /> Please scroll through this list of congress members, and learn about the one's affecting your community.</h5>
                            </div>
                            <br/>

                        </div>
                    </div>
                </div>
            </div>

            {this.state.members.map((item, i)=>(
                <MemberCard style={{float: "left",
                color : "blue"}}
                name={item.name}
                state={item.state}
                chamber={item.chamber}
                party={item.party}
                twitter ={item.twitter}
                />
            ))}




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
