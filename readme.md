# ReactJS Prototype

This is a _very_ bare bones prototype used to demonstrate some of the ideas we're putting forward around using ReactJS in the CMS.

## Dependency Injection with Bottle

This branch is a PoC for how dependency injection could work using [bottlejs](https://github.com/young-steveo/bottlejs).

The `common` directory represents common components (smart and dumb) available for use in the CMS and any thrid party ReactJS applications.

The `cms` directory represents the core SilverStripe CMS ReactJS aplication.

The `better-component` directory represents a third party module which integrates with the core CMS app.

JavaScript dependencies and build tasks for common, cms, and better-component applications are managed at the root level, this is just for simplicity, they would be handled independently in real applications.

## Form field schema

```json
{
    "page": {
        "id": 1,
        "form": {
            "fields": [
                {
                    "type": "",
                    "name": "",
                    "component": "",
                    "title": "",
                    "value": "",
                    "source": [],
                    "message": "",
                    "messageType": "",
                    "extraClass": "",
                    "description": "",
                    "rightTitle": "",
                    "leftTitle": "",
                    "containerFieldList": 0,
                    "readOnly": true,
                    "disabled": true,
                    "customValidationMessage": "",
                    "attributes": [],
                    "children": [
                        {
                            "type": "",
                            "name": ""
                        }
                    ]
                }
            ]
        }
    }
}
```


## PHP Form Schema

To complement the above, Form and FormFields would implement a getSchema() method to automatically
declare a frontend mapping for the above.

Formfields are generally one of two types: A data type, such as a text field, or a structural type,
which does not have a backing field, or post back any data.

### Data fields

For data types, the "name" will be used as the posted back value. The "type" field will reference
one of the standard data types, as below:

 * String - Single line text
 * Text - Multi line text
 * HTML - Rich html text
 * Integer - Whole number value
 * Decimal - Decimal value
 * MultiSelect - Select many from source
 * SingleSelect - Select one from source
 * Date - Date only
 * DateTime - Date and time
 * Time - Time only
 * Boolean - Yes or no

Additionally, data fields may specify a specific `component` value to further customise
the way that their specific data should be managed. For instance a field with `type=MultiSelect`
could specify `component=Radio` in order to request that the frontend use that template.

This allows advanced developers, those willing and able to build custom frontend components in react,
to develop advanced functionality, or even replace existing functionality with custom templates
(for fields relying on default components).

If `component` is not selected, then the frontend will determine the best component to
use for the given data type. The frontend API will promise to provide any component for
each of the given data types, as a standard.

Data type fields do not allow `children` to be specified.

### Structural elements

Unlike data fields, structural elements (such as composite fields, field groups, headers, etc...)
have no data type. These fields differ from data types:

 * `type` value must be null, as it does not have an underlying data.
 * `component` is mandatory, as the component will be responsible for rendering its children.
 * `children` is optional, and may reference any number of nested fields using the same schema.

## Install

Only required if you want to hack around with the code.

- Get the dependencies with `npm install`
- Build your changes with `npm run build`

## Usage

Start a dev server from the root directory `php -S localhost:8000`
