# react-forms-jsonschema

Build forms with JSON Schema in React

## JSON Schema

- https://json-schema.org/
- Describes data of any shape, even a complete UI (with the JSON Hyper-Schema extension)
- It's an IETF draft specification not yet accepted as standard.
- There is no other international standard. There is [OpenAPI](https://www.openapis.org/) for REST APIs which is similar to JSON Schema but more broader.

## react-jsonschema-form

- https://github.com/rjsf-team/react-jsonschema-form
- It's the most versatile JSON Schema form generator found in [this research](https://github.com/metamn/react-forms)
- It [doesn't fully covers](https://react-jsonschema-form.readthedocs.io/en/latest/#json-schema-supporting-status) the JSON Schema specification
- It extends the specification in arbitrary ways:

  - [Schema and UI validations](https://react-jsonschema-form.readthedocs.io/en/latest/validation/)
  - [Theming](https://react-jsonschema-form.readthedocs.io/en/latest/form-customization/#the-uischema-object)
  - [Form data management](https://react-jsonschema-form.readthedocs.io/en/latest/#handling-of-schema-defaults)
  - extra error handling
  - [Advanced customizations ](https://react-jsonschema-form.readthedocs.io/en/latest/#handling-of-schema-defaults)
  - [Form customizations](https://react-jsonschema-form.readthedocs.io/en/latest/form-customization/)

- It has [lots of 3rd party libraries, addons](https://github.com/search?q=react+form+jsonschema&type=Repositories)
  like:

  - [better conditionals](https://github.com/RxNT/react-jsonschema-form-conditionals)
  - [extra form fields and widgets](https://github.com/RxNT/react-jsonschema-form-extras)

## Features

Combining the libraries above we have:

### Semantic annotations

- Describe, validate and attach test cases to a schema
- https://json-schema.org/understanding-json-schema/reference/generic.html

```js
{
  "title" : "Match anything",
  "description" : "This is a schema that matches anything.",
  "default" : "Default value",
  "examples" : [
    "Anything",
    4035
  ]
}
```

### Reusing schemas

- Build up large schemas from smaller components
- https://json-schema.org/understanding-json-schema/structuring.html#reuse
- https://rjsf-team.github.io/react-jsonschema-form/ "References" tab

```js
{
  "$schema": "http://json-schema.org/draft-07/schema#",

  "definitions": {
    "address": {
      "type": "object",
      "properties": {
        "street_address": { "type": "string" },
        "city":           { "type": "string" },
        "state":          { "type": "string" }
      },
      "required": ["street_address", "city", "state"]
    }
  },

  "type": "object",

  "properties": {
    "billing_address": { "$ref": "#/definitions/address" },
    "shipping_address": { "$ref": "#/definitions/address" }
  }
}
```

### JSON-LD (Schema.org) integration

- Definitions can be taken from the standard [Schema.org](https://schema.org/) vocabulary.
- The question is how complete Schema.org is? Are there definitions for anything and everything?

#### Resources

- JSON Schema can be transformed to be a valid to Schema.org document: https://www.w3.org/2019/wot/json-schema#usage-examples
- Any Schema.org vocabulary entry can be imported to JSON Schema with `id`: https://www.w3.org/2019/wot/json-schema#referencing-and-linking
- Any Schema.org data type can be used inside JSOn Schema with `jsonld:context`: https://www.w3.org/2019/wot/json-schema#defining-a-json-ld-context-for-data-instances

### Conditionals

- Display parts of the schema based on conditionals
- https://json-schema.org/understanding-json-schema/reference/conditionals.html
- https://rjsf-team.github.io/react-jsonschema-form/ "Schema dependencies" tab

```js
{
  "type": "object",
  "properties": {
    "street_address": {
      "type": "string"
    },
    "country": {
      "enum": ["United States of America", "Canada"]
    }
  },
  "if": {
    "properties": { "country": { "const": "United States of America" } }
  },
  "then": {
    "properties": { "postal_code": { "pattern": "[0-9]{5}(-[0-9]{4})?" } }
  },
  "else": {
    "properties": { "postal_code": { "pattern": "[A-Z][0-9][A-Z] [0-9][A-Z][0-9]" } }
  }
}
```

### Validations

- By default, form data are only validated when the form is submitted or when a new `formData` prop is passed to the Form component.
- You can enable live form data validation by passing a `liveValidate` prop to the Form component, and set it to `true`. Then, everytime a value changes within the form data tree (eg. the user entering a character in a field), a validation operation is performed, and the validation results are reflected into the form state.
- To disable validation entirely, you can set Form's `noValidate` prop to `true`.

### Grouping

- Infinitely nested field groups
- https://json-schema.org/understanding-json-schema/reference/object.html
- https://rjsf-team.github.io/react-jsonschema-form/ "Nested" tab

```js
{
  "type": "object",
  "properties": {
    "number":      { "type": "number" },
    "street_name": { "type": "string" }
  }
}
```

### Lists

- Iterables, enumerables, arrays, lists
- https://json-schema.org/understanding-json-schema/reference/array.html
- https://rjsf-team.github.io/react-jsonschema-form/ "Arrays" tab

```js
{
  "type": "array",
  "items": {
    "type": "string",
	"enum": ["foo", "bar", "baz"]
  }
}
```

### Built-in string formats

- Pre-defined string formats for easy validations
- https://json-schema.org/understanding-json-schema/reference/string.html#built-in-formats
- https://rjsf-team.github.io/react-jsonschema-form/ "Date & time" tab

```js
"type": "string",
"format": "date-time"
```

### Dynamic type shapes

- A field can have dynamic shapes like in PropTypes and TypeScript
- https://json-schema.org/understanding-json-schema/reference/combining.html
- https://rjsf-team.github.io/react-jsonschema-form/ "Any of", "One of" tabs

```js
{
  "anyOf": [
    { "type": "string", "maxLength": 5 },
    { "type": "number", "minimum": 0 }
  ]
}
```
