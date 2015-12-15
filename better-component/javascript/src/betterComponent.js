import di from 'di';
import React from 'react';

// Called each time FriendsList is requested from the di container.
di.middleware('FriendsListComponent', (FriendsListComponent, next) => {
    next(); // Call the next middleware. Can optionally pass an error.
});

// Called once the first time FriendsList is requested from the di container.
// Multiple decorators can be added to the same class and are called
// in the order they were added.
di.decorator('FriendsListComponent', (FriendsListComponent) => {
    // Override what's rendered in each row of the friends list.
    FriendsListComponent.prototype.getFriendComponents = function () {
        return this.props.friends.friends.map((friend, i) => {
            return (
                <li key={i}>
                    <p>Decorated friend:</p>
                    <p>{friend.name}</p>
                </li>
            );
        });
    };

    return FriendsListComponent;
});
