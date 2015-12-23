import { di } from 'di';
import BetterComponent from './components/betterList/betterListComponent';
import * as betterFriendsActions from './actions/betterFriendsActions';
import betterComponentReducer from './reducers/betterFriendsReducer';

// Register some initial state for Better Component.
// Merged with the core CMS state by when it initialises.
di.service('betterList_initialState', () => { friends: { betterComponentColor: '#000000' } });

// Called the first time FriendsList is requested from the DI container.
// Multiple decorators can be added to the same class and are called in the order they were added.
// Here we replace FriendsListComponent with BetterComponent.
di.decorator('DataListComponent', () => BetterComponent);

// Extends friendsListActions with our betterComponentAvtions.
di.decorator('friendsActions', (friendsListActions) => Object.assign({}, friendsListActions, betterFriendsActions));

di.decorator('friendsReducer', (friendsListReducer) => betterComponentReducer(friendsListReducer));
