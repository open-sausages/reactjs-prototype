/**
 * Form field component for a text input.
 */
import React, { PropTypes, Component } from 'react';

class TextFieldComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        };

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className='text-field-component'>
                {typeof this.props.title !== 'undefined' &&
                    <label>{this.props.title}</label>
                }
                <input type='text' value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }

    /**
     * Handles the `onChange` event for the field.
     *
     * @param object event
     */
    handleChange(event) {
        this.setState({ value: event.target.value });
    } 
}

TextFieldComponent.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string.isRequired
};

export default TextFieldComponent;
