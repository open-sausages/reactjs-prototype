import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as friendsListActions from '../components/friendsList/friendsListActions';
import FriendsList from '../components/friendsList/friendsListComponent';

class App extends Component {

    render() {
        const { friends, actions } = this.props;

        return (
            <div>
                <FriendsList friends={friends} actions={actions} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        friends: state.friends
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(friendsListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
