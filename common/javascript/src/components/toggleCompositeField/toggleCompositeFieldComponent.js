/**
 * Form field component for a text input.
 */
import React, { PropTypes, Component } from 'react';

class ToggleCompositeFieldComponent extends Component {

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
                <fieldset>
                    {this.props.children}
                </fieldset>
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

ToggleCompositeFieldComponent.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string
};

export default ToggleCompositeFieldComponent;
