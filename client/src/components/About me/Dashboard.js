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
      <div
        style={{ height: "75vh", flexDirection: "column" }}
        className="container valign-wrapper"
      >
        <div className="row">
          <div className="col s12 left-align">
            <h4>
              <b>About Us + Learn More</b>
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col s12 left-align">
            <div
              className="section no-pad-bot green lighten-5"
              id="index-banner"
            >
              <div className="container">
                <br />
                <h1 className="header center  green-text text-darken-3">
                  Ground-Up
                </h1>
                <h5 className="header center col s12 light">
                  <hr />
                  We can improve, so let's do it...from the ground up!
                </h5>
                <div className="row center"></div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <h2>
          <b>About Us:</b>
        </h2>
        <p className="flow-text">
          <b>
            Hi! We are Juan Rada and Sanjeev Chadeesingh, and we developed
            Ground-Up.
          </b>{" "}
          Sanjeev merged his interest in economic and environmental policy with
          his budding web development skills. After a conversation with Juan
          about politics, he wanted to make an application that put a spotlight on the
          local governments in America. Juan decided to use his development
          skills to better his understanding of complex government data,
          with the hope of accurately forecasting policy changes.
        </p>
        <h2>
          <b>Learn More:</b>
        </h2>
        <p className="flow-text">
          <b>
            Voting in United States local elections has long been a process in
            which few people participate.
          </b>{" "}
          Set against Presidential voting cycles, when roughly half the country
          votes, local elections typically garner only half of that, bringing
          total participation to a number fluctuating between 20 and 25 percent.
          When compared to other countries' participation in local politics, the
          numbers become concerning. According to the Organization for Economic
          Cooperation and Development, the United States places 31st among 35
          developed, democratic countries within the organization for voter
          turnout in local elections.
        </p>

        <p className="flow-text">
          <b>
            One of the more worrisome facts regarding Americans' lack of
            participation in local government is the direct impact made to
            communities via the laws and bills passed locally.
          </b>{" "}
          Important communitity markers such as: quality of local schools,
          policing and public safety, public transit, city colleges and job
          training, income tax rates, and reproductive rights are voted upon at
          the local level. No matter how strong your feelings are for a sitting
          President, they have no say in the funding for your local school
          system, or the health of your local roads, or the availability of
          loans and grants from your local colleges. Thankfully, at the end of
          the 2018 mid-term elections, a groundswell of change and support
          became evident. More people voted in the 2018 mid-term elections than
          every election cycle before it, stretching all the way back to 1966.
          Whether or not America is changing in this regard isn't a topic up for
          disussion. It is a fact we should learn from.
        </p>

        <p className="flow-text">
          <b>We are living in a country undergoing a transformation.</b>{" "}
          Demographics across the country are changing. According to both the
          U.S. Census Bureau and a recent Pew Research Poll, Baby Boomers no
          longer comprise the largest generation, because Millenials do, at 73
          million people. That is roughly 1 in 5 Americans. The fact that 1 in 5
          Americans were born in or after 1981 brings with it a subset of facts,
          one of which is worth noting here. Take nightly cable news viewers and
          viewership as an example. The average age of the viewer watching cable
          news on "the big four:" CBS, NBC, ABC and Fox News, is 65, according
          to a Pew Research analysis of Nielsen Media Research data completed in
          2018. This same study also researched the total amount of viewers the
          nightly news maintains, and this total has seen a drop year over year
          since 2010.
        </p>
        <p className="flow-text">
          <b>So, where are these new voters going for their information?</b> To
          the Internet. Applications like Ground-Up, video hosting sites such as
          Vimeo and Youtube, and raw statistics from independent sites that
          scrape government websites are becoming the go-to for the growing
          classes of both younger people and younger people interested in
          politics. Podcasts from independent Journalists are on the rise,
          alongside their sister websites. At Ground-Up, we are trying to grab a
          piece of this growing market share of new, government-conscious
          Americans who don't rely on conventional media for their information.
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

export default connect(mapStateToProps, { logoutUser })(Dashboard);
