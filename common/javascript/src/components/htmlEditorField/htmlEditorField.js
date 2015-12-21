/**
 * Form field component for an HTML editor.
 */
import React, { PropTypes, Component } from 'react';

class HtmlEditorField extends Component {

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
                <textarea type='text' value={this.state.value} onChange={this.handleChange} />
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

HtmlEditorField.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string.isRequired
};

export default HtmlEditorField;
