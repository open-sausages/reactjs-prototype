import { di } from 'di';
import BetterComponent from './components/betterComponent/betterComponent';
import * as betterComponentActions from './components/betterComponent/betterComponentActions';
import betterComponentReducer from './components/betterComponent/betterComponentReducer';

// Register some initial state for Better Component.
// Merged with the core CMS state by when it initialises.
di.service('BetterComponent_initialState', () => {
    return {
        friends: {
            betterComponentColor: '#000000'
        }
    };
});

// Called the first time FriendsList is requested from the DI container.
// Multiple decorators can be added to the same class and are called in the order they were added.
di.decorator('FriendsListComponent', (FriendsListComponent) => {
    return BetterComponent; // Replaces FriendsListComponent with BetterComponent.
});

di.decorator('FriendsListActions', (friendsListActions) => {
    // Extends friendsListActions with our betterComponentAvtions.
    return Object.assign({}, friendsListActions, betterComponentActions);
});

di.decorator('FriendsListReducer', (friendsListReducer) => {
    return betterComponentReducer(friendsListReducer);
});
