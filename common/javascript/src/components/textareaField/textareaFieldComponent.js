/**
 * Form field component for a textarea.
 */
import React, { PropTypes, Component } from 'react';

class TextareaFieldComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        };

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className='textarea-field-component'>
                {typeof this.props.title !== 'undefined' &&
                    <label>{this.props.title}</label>
                }
                <textarea value={this.state.value} onChange={this.handleChange} />
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

TextareaFieldComponent.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string.isRequired
};

export default TextareaFieldComponent;
