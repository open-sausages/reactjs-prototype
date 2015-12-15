/**
 * Bootstrap dependency injection for common components.
 */

import di from './di';
import FriendsList from './components/friendsList/friendsListComponent';

// Registers FriendsList with di.
// Called the first time FriendsList is requested from the di container.
di.factory('FriendsListComponent', (container) => {
    // Whatever is returned will be a singleton i.e. whenever FriendList is requested
    // from the di container, this exact object will be returned. We're returning
    // the class because we don't want to use the same instance every time FriendsList is requested.
    return FriendsList;
});
