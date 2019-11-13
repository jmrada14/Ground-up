import React, { Component } from "react";
import FriendCard from "./cards";
import Wrapper from "./Wrapper";

class MembersApp extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        friends
    };

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return (
            <Wrapper>
                {this.state.friends.map(friend => (
                    <FriendCard
                        removeFriend={this.removeFriend}
                        id={friend.id}
                        key={friend.id}
                        name={friend.name}
                        image={friend.image}
                        occupation={friend.occupation}
                        location={friend.location}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default MembersApp;
