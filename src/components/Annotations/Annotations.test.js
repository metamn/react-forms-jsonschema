import React from "react";
import { render } from "@testing-library/react";
import Annotations from "./Annotations";

it("has a Annotations component", () => {
  const { getByText } = render(<Annotations />);
  expect(getByText("Annotations")).toBeInTheDocument();
});
