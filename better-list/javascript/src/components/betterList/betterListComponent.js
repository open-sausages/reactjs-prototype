import React from 'react';
import DataListComponent from 'DataListComponent'; // Comes from common

class BetterComponent extends DataListComponent {
    constructor(props) {
        super(props);

        this.handleFriendClick = this.handleFriendClick.bind(this);
    }

    getFriendComponents() {
        const style = {
            'color': this.props.friends.betterComponentColor
        };

        return this.props.friends.friends.map((friend, i) => {
            return (
                <li key={i}>
                    <p><a href='#' onClick={this.handleFriendClick} style={style}>(¯`·._.·[{friend.name}]·._.·´¯)</a></p>
                </li>
            );
        });
    }

    handleFriendClick(event) {
        event.preventDefault();

        const color = this.generateRamdomHexColor();

        this.props.actions.applyCrazyColors(color);
    }

    generateRamdomHexColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}

export default BetterComponent;
