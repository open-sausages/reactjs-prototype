import di from 'di'; // Comes from common
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {

    render() {
        const FriendsListComponent = di.container.FriendsListComponent;
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
        actions: bindActionCreators(di.container.FriendsListActions, dispatch)
    };
}

export default function app() {
    return connect(mapStateToProps, mapDispatchToProps)(App);
};
