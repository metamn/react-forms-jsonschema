import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Form from "react-jsonschema-form";

/**
 * Defines the prop types
 */
const propTypes = {
  schema: PropTypes.object
};

/**
 * Defines the default props
 */
const defaultProps = {
  schema: {
    title: "A registration form",
    description: "A simple form example.",
    type: "string",
    default: "Default value",
    examples: ["Anything", "Which is string"]
  }
};

const Example = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between"
});

const Item = styled("div")({
  padding: "1.25em 2.5em",
  margin: "0 1.25em 1.25em 0",
  border: "1px solid",
  width: "calc(50% - 1.25em)",

  "& .Title": {
    borderBottom: "1px solid",
    paddingBottom: ".625em",
    marginBottom: ".625em"
  }
});

/**
 * Displays the component
 */
const Annotations = props => {
  const { schema } = props;

  const codeSnippet = "<Form schema={schema} />";

  const [output, setOutput] = useState();

  const onSubmit = ({ formData }, e) => {
    setOutput(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="Annotations">
      <h2>Annotations</h2>

      <Example className="Example">
        <Item className="Item">
          <h3 className="Title">Schema</h3>
          <pre>
            <code>{JSON.stringify(schema, null, 2)}</code>
          </pre>
        </Item>

        <Item className="Item">
          <h3 className="Title">HTML</h3>
          <pre>
            <code>{codeSnippet}</code>
          </pre>
        </Item>

        <Item className="Item">
          <h3 className="Title">Result</h3>
          <Form schema={schema} onSubmit={onSubmit} />
        </Item>

        <Item className="Output">
          <h3 className="Title">Output</h3>
          <pre>
            <code>{output}</code>
          </pre>
        </Item>
      </Example>
    </div>
  );
};

Annotations.propTypes = propTypes;
Annotations.defaultProps = defaultProps;

export default Annotations;
export {
  propTypes as AnnotationsPropTypes,
  defaultProps as AnnotationsDefaultProps
};
