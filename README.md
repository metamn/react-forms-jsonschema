# react-forms-jsonschema

Build forms with JSON Schema in React

## JSON Schema

- https://json-schema.org/
- It's an IETF draft specification not yet accepted as standard.
- There is no other international standard. There is [OpenAPI](https://www.openapis.org/) for REST APIs which is similar to JSON Schema but more broader.
- It can describe any data in any shape, like a complete UI with JSON Hyper-Schema

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

- It has lots of 3rd party libraries, addons: https://github.com/search?q=react+form+jsonschema&type=Repositories
  like [better conditionals](https://github.com/RxNT/react-jsonschema-form-conditionals) or [extra form fields and widgets](https://github.com/RxNT/react-jsonschema-form-extras)

## Features

Combining the libraries above we have:

### Semantic annotations

- https://json-schema.org/understanding-json-schema/reference/generic.html
- Describe, validate and attach test cases to a schema

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

### Combining schemas

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

### Reusing schemas

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

### Conditionals

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

### Grouping

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

- https://json-schema.org/understanding-json-schema/reference/string.html#built-in-formats
- https://rjsf-team.github.io/react-jsonschema-form/ "Date & time" tab

```js
"type": "string",
"format": "date-time"
```

### Ranges

- https://json-schema.org/understanding-json-schema/reference/numeric.html#range
- https://rjsf-team.github.io/react-jsonschema-form/ "Numbers" tab

## Built on

- https://github.com/facebook/create-react-app
- https://github.com/rjsf-team/react-jsonschema-form
