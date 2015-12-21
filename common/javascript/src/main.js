/**
 * Bootstrap dependency injection for common components.
 *
 * Each `factory` is called once, the first time the component is requested from the DI container.
 * A factory will return a singleton, so we're returning the class, this means we can always
 * create instances of the class, rather than being restricted to a single instance.
 */

import { di } from './di';

import FriendsListComponent from './components/friendsList/friendsListComponent';
import FormComponent from './components/form/formComponent';
import TextFieldComponent from './components/textField/textFieldComponent';
import SiteTreeUrlSegmentFieldComponent from './components/siteTreeUrlSegmentField/siteTreeUrlSegmentFieldComponent';
import HtmlEditorFieldComponent from './components/htmlEditorField/htmlEditorFieldComponent';
import ToggleCompositeFieldComponent from './components/toggleCompositeField/toggleCompositeFieldComponent';
import TextareaFieldComponent from './components/textareaField/textareaFieldComponent';

import * as friendsListActions from './actions/friendsListActions';
import * as pageActions from './actions/pageActions';

import friendsListReducer from './reducers/friendsListReducer';
import pageReducer from './reducers/pageReducer';

/**
 * Register components with DI.
 */
di.factory('FriendsListComponent', () => FriendsListComponent);
di.factory('Form', () => FormComponent);
di.factory('TextField', () => TextFieldComponent);
di.factory('SiteTreeURLSegmentField', () => SiteTreeUrlSegmentFieldComponent);
di.factory('HtmlEditorField', () => HtmlEditorFieldComponent);
di.factory('ToggleCompositeField', () => ToggleCompositeFieldComponent);
di.factory('TextAreaField', () => TextareaFieldComponent);

/**
 * Register actions with DI.
 */
di.factory('friendsListActions', () => friendsListActions);
di.factory('pageActions', () => pageActions);

/**
 * Register reducers with DI.
 */
di.factory('friendsListReducer', () => friendsListReducer);
di.factory('pageReducer', () => pageReducer);
