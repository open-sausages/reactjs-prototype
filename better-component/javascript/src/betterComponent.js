import di from 'di';
import React from 'react';
import FriendsListComponent from 'friendsListComponent'; // Comes from common

class BetterComponent extends FriendsListComponent {
    constructor(props) {
        super(props);

        this.handleFriendClick = this.handleFriendClick.bind(this);
    }

    getFriendComponents() {
        return this.props.friends.friends.map((friend, i) => {
            return (
                <li key={i}>
                    <p><a href='#' onClick={this.handleFriendClick}>(¯`·._.·[{friend.name}]·._.·´¯)</a></p>
                </li>
            );
        });
    }

    handleFriendClick(event) {
        event.preventDefault();

        console.log('click');
    }

    generateRamdomHexColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}

// Register some initial state for Better Component.
// Merged with the core CMS state by when it initialises.
di.service('BetterComponent_initialState', () => {
    return {
        friends: {
            betterComponentItem: null,
            betterComponentColor: '#000000'
        }
    };
});

// Called once the first time FriendsList is requested from the DI container.
// Multiple decorators can be added to the same class and are called in the order they were added.
di.decorator('FriendsListComponent', (FriendsListComponent) => {
    return BetterComponent; // Replaces FriendsListComponent with BetterComponent.
});

export default BetterComponent;
