#react-forms-jsonschema

Build forms with JSON Schema in React

## JSON Schema

- https://json-schema.org/
- It's an IETF draft specification not yet accepted as standard.
- There is no other international standard. There is [OpenAPI](https://www.openapis.org/) for REST APIs which is similar to JSON Schema but more broader.

### Features

- https://json-schema.org/understanding-json-schema/reference/index.html

### Nesting with `object`

```js
{
  "type": "object",
  "properties": {
    "number":      { "type": "number" },
    "street_name": { "type": "string" }
}
```

## Built on

- https://github.com/facebook/create-react-app
- https://github.com/rjsf-team/react-jsonschema-form

## Preamble

In https://github.com/metamn/react-forms there is a mini research to find the best library to generate React forms from JSON in a standard way.

It seems currently https://github.com/rjsf-team/react-jsonschema-form is the most viable solution.
