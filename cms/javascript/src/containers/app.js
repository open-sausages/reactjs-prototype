import di from 'di'; // Comes from common
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as friendsListActions from 'friendsListActions'; // Comes from common

// Get the DI versions so we also get any third party extensions.
const friendsListActions = di.container.FriendsListActions;
const FriendsListComponent = di.container.FriendsListComponent;

class App extends Component {

    render() {
        const { friends, actions } = this.props;

        return (
            <div>
                <FriendsListComponent friends={friends} actions={actions} />
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
