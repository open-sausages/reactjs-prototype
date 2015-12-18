/**
 * Bootstrap dependency injection for common components.
 */

import { di } from './di';
import FriendsListComponent from './components/friendsList/friendsListComponent';
import FriendsListReducer from './components/friendsList/friendsListReducer';
import * as friendsListActions from './components/friendsList/friendsListActions';

// Registers FriendsList with DI.
// Called the first time FriendsList is requested from the di container.
di.factory('FriendsListComponent', (container) => {
    // Whatever is returned will be a singleton i.e. whenever FriendList is requested
    // from the di container, this exact object will be returned. We're returning
    // the class because we don't want to use the same instance every time FriendsListComponent is requested.
    return FriendsListComponent;
});

di.factory('FriendsListReducer', () => {
    return FriendsListReducer;
});

di.factory('FriendsListActions', () => {
    return friendsListActions;
});
