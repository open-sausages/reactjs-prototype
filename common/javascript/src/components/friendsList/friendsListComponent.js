import React, { PropTypes, Component } from 'react';

class FriendsListComponent extends Component {

    componentDidMount() {
        this.props.actions.fetchFriendsIfNeeded();
    }

    render() {
        const { isFetching, error, friends } = this.props.friends;

        return (
            <div>
                <h3>Friends</h3>
                {isFetching &&
                    <p>Loading...</p>
                }
                {!isFetching && friends.length > 0 &&
                    <ul>{this.getFriendComponents()}</ul>
                }
            </div>
        );
    }

    getFriendComponents() {
        return this.props.friends.friends.map((friend, i) => {
            return (
                <li key={i}>
                    <p>{friend.name}</p>
                </li>
            );
        });
    }
}

FriendsListComponent.propTypes = {
    friends: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default FriendsListComponent;
