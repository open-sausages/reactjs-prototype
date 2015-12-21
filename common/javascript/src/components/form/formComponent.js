import { di, filterValidFieldTypes } from 'di';
import React, { PropTypes, Component } from 'react';

class FormComponent extends Component {

    render() {
        const fields = this.getFieldComponents();

        return (
            <form>
                {this.props.title &&
                    <legend>this.props.title</legend>
                }
                {fields.length > 0 &&
                    <fieldset>{fields}</fieldset>
                }
            </form>
        );
    }

    /**
     * Gets an array of form field components to render in the form.
     *
     * @return array
     */
    getFieldComponents() {
        // If there are no form fields, we have nothing to do,
        // so just return an empty array.
        if (this.props.fields.length === 0) {
            return this.props.fields;
        }

        // Remove any form fields we can't render.
        // i.e. any form fields that are not registered with DI.
        const fieldsToRender = filterValidFieldTypes(this.props.fields);

        return fieldsToRender.map((field, i) => {
            const Component = di.container[field.type];

            return (
                <Component key={i} title={field.title} value={field.value} />
            );
        });
    }
}

FormComponent.propTypes = {
    fields: PropTypes.array.isRequired
};

export default FormComponent;
