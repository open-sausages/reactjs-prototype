/**
 * Form field component for displaying a URL segment.
 */
import React, { PropTypes, Component } from 'react';

class SiteTreeURLSegmentField extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        };

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className='sitetree-url-segment-field-component'>
                {typeof this.props.title !== 'undefined' &&
                    <label>{this.props.title}</label>
                }
                <input type='text' value={this.state.value} onChange={this.handleChange} />
                <button>Edit</button>
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

SiteTreeURLSegmentField.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string.isRequired
};

export default SiteTreeURLSegmentField;
