import { di, filterValidFieldTypes } from 'di';
import React, { PropTypes, Component } from 'react';

class FormComponent extends Component {

    render() {
        // Remove any form fields we can't render.
        // i.e. any form fields that are not registered with DI.
        const fields = filterValidFieldTypes(this.props.fields);

        const fieldComponents = this.getFieldComponents(this.getTopLevelFields(fields));

        return (
            <form>
                {this.props.title &&
                    <legend>this.props.title</legend>
                }
                {fields.length > 0 &&
                    <fieldset>{fieldComponents}</fieldset>
                }
            </form>
        );
    }

    /**
     * Gets and array of field objects that are top level fields.
     * i.e. they have no parent field.
     *
     * @param array fields
     * @return array
     */
    getTopLevelFields(fields) {
        return fields.filter(field => typeof field.parent === 'undefined');
    }

    /**
     * Gets an array of fields that are the children of the passed parent.
     *
     * @param array fields - The field list where the children are.
     * @param string parentName - The name of the parent field.
     * @return array
     */
    getChildFields(fields, parentName) {
        return fields.filter((field) => {
            return field.parent === parentName;
        });
    }

    /**
     * Gets an array of form field components to render in the form.
     *
     * @param array fields - Field objects to render as React components.
     * @return array
     */
    getFieldComponents(fields) {
        return fields.map((field, i) => {
            var children = null;

            const Component = di.container[field.type];

            // If the field has children (e.g. a composite field) recursivly
            // create its decendent composents.
            if (typeof field.children !== 'undefined') {
                children = this.getFieldComponents(this.getChildFields(this.props.fields, field.name));
            }

            return (
                <Component key={i} {...field}>
                    {children}
                </Component>
            );
        });
    }
}

FormComponent.propTypes = {
    fields: PropTypes.array.isRequired
};

export default FormComponent;
