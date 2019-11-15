import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class ApiDocs extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {

        return (
            <div style={{ height: "75vh",
                flexDirection : "column"}} className="container valign-wrapper">


                <p className="flow-text">
                   Our API has 2 main utilities:
                   <b>Get members & Get bills</b>
                    <br/>
                    <br/>
                    <h1><b>Get members:<br/></b></h1>
                    <br/>
                    <h3>Available routes and expected response:</h3>
                    <br/><code>
                        <h3> Using curl: <br/><br/></h3>

                    <br/>
                        <h4>Get all members:</h4><br/><br/>
                       curl https://afternoon-spire-83943.herokuapp.com/api/members/all
                        <br/><br/>
                        Response: an array containing 532 members from house and senate.
                        <br/><br/>
                        <br/><br/>

                        <h4>Get members by chamber:</h4><br/><br/>
                    curl https://afternoon-spire-83943.herokuapp.com/api/members/chamber/CHAMBER
                    <br/><br/>
                    add desired chamber where CHAMBER, example: <br/><br/>curl https://afternoon-spire-83943.herokuapp.com/api/members/chamber/house
                    <br/><br/>Response: an array containing members of senate <b>OR</b> house depending on the desired chamber <br/><br/>

                    <h4>Get members by state:</h4><br/><br/>
                    curl https://afternoon-spire-83943.herokuapp.com/api/members/state/STATE
                    <br/><br/>
                    add desired state where STATE, please use capital case, example: <br/><br/>curl https://afternoon-spire-83943.herokuapp.com/api/members/state/AK
                    <br/><br/>Response: an array containing members of senate and house from the desired state <br/><br/>

                    <h4>Get members by party:</h4><br/><br/>
                    curl https://afternoon-spire-83943.herokuapp.com/api/members/party/PARTY
                    <br/><br/>
                    add desired party where PARTY, please use capital case, example: <br/><br/>curl https://afternoon-spire-83943.herokuapp.com/api/members/party/D
                    <br/><br/>Response: an array containing members of senate and house from the desired party <br/><br/>

                    <h4>Get members by gender:</h4><br/><br/>
                    curl https://afternoon-spire-83943.herokuapp.com/api/members/gender/GENDER
                    <br/><br/>
                    add desired gender where GENDER, please use capital case, example: <br/><br/>curl https://afternoon-spire-83943.herokuapp.com/api/members/gender/F
                    <br/><br/>Response: an array containing members of senate and house from the desired gender <br/><br/>

                </code>
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

ApiDocs.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(ApiDocs);
