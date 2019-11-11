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
              <b>About us</b>
            </h4>
          </div>
        </div>



          <div className="row">
              <div className="col s12 left-align">
          <div className="section no-pad-bot green lighten-5" id="index-banner">
              <div className="container">
                  <br/>
                  <h1 className="header center  green-text text-darken-3">Ground up</h1>
                  <div className="row center">
                  </div>
                  <br/>

              </div>
          </div>
              </div>

      </div>


          <p className="flow-text">


              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim ligula, ultricies vitae aliquam sit amet, lacinia eget ante. Ut sed lectus vitae tellus interdum finibus at et turpis. Praesent ornare malesuada risus, sed tempus turpis tristique in. Suspendisse euismod, ex quis dictum consectetur, est lacus vehicula ante, ut dapibus orci erat at dolor. Pellentesque lacinia lorem ac tincidunt tempor. Integer ac tellus consequat, malesuada libero id, viverra neque. Curabitur in quam interdum, fringilla ligula vitae, porta ante. Vivamus eget lacus in urna posuere tempor vel sed arcu. Sed sed scelerisque dui. Mauris egestas erat at placerat ultrices.

              Sed rhoncus dolor nec felis pharetra aliquam. Etiam laoreet venenatis lorem. Fusce iaculis lacinia justo. Nam semper elementum ipsum eget convallis. Vestibulum et massa ligula. Etiam sit amet commodo massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi nisl enim, imperdiet quis auctor vitae, scelerisque et mauris. Integer eget ullamcorper nunc. Etiam semper augue sit amet pulvinar fringilla. Aenean nisi nibh, convallis eget mi ultricies, aliquet cursus purus. Suspendisse potenti. Maecenas tellus augue, lobortis non eros in, pulvinar commodo elit. Mauris vitae gravida tortor.

              Curabitur maximus augue lectus, quis laoreet leo pharetra vel. Cras quam velit, molestie in est a, varius semper nisl. Phasellus aliquet faucibus nisl, id facilisis nunc pretium a. Maecenas lacus leo, accumsan at ante sit amet, viverra fringilla metus. Vestibulum pulvinar sapien tortor. Quisque venenatis tellus eget ex semper auctor non in libero. Nullam venenatis justo ex, ac imperdiet dolor consectetur eget. Morbi sed elit quis erat luctus sollicitudin ac consequat libero. Fusce molestie nec purus eu aliquam. Sed ut consequat dolor. In erat diam, rutrum id placerat eu, convallis ac libero. Suspendisse ac hendrerit arcu. Donec odio turpis, dignissim sed arcu in, viverra lobortis mi. Suspendisse iaculis felis sit amet leo venenatis, elementum lacinia turpis mattis. Proin id erat eros.

              Aliquam pharetra mi ac auctor mollis. Pellentesque blandit mauris tellus, at vulputate leo rhoncus ac. Vestibulum justo dolor, ultrices vel lectus sed, sollicitudin pellentesque dui. Sed in mauris in metus efficitur vestibulum vel sed justo. Morbi nec condimentum augue. Quisque sed nisi libero. Aliquam placerat elit vel leo sagittis rhoncus. Mauris hendrerit tortor est, et suscipit mi consequat et. Praesent sit amet nisl luctus, molestie ante sed, molestie massa.

              Maecenas condimentum elit sit amet leo commodo, ac semper nisl iaculis. Mauris in congue mauris, id porttitor metus. Vestibulum ultrices, lacus eu ultricies elementum, urna velit fermentum magna, in pretium velit dui at massa. Maecenas vel elit urna. Aliquam eleifend magna et nibh iaculis ullamcorper. Vivamus justo neque, dignissim sit amet lorem et, fermentum venenatis augue. Vestibulum congue libero lectus, sed mattis tellus mollis ac. Vestibulum mattis id enim nec pharetra. Pellentesque dapibus non dui id pellentesque. Praesent sed elit blandit, pellentesque sapien pharetra, posuere orci. Nulla at rutrum tellus. Nam neque nibh, ultrices in urna quis, consequat facilisis nibh. Maecenas commodo ut elit ut accumsan.
          </p>


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
