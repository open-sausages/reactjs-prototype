/**
 * Bootstrap dependency injection for common components.
 */

import { di } from './di';
import DataListComponent from './components/dataList/dataListComponent';
import friendsReducer from './reducers/friendsReducer';
import * as friendsActions from './actions/friendsActions';

// Register some things with DI.
di.factory('DataListComponent', () => DataListComponent);
di.factory('friendsReducer', () => friendsReducer);
di.factory('friendsActions', () => friendsActions);
