import React from "react";
import { render } from "@testing-library/react";
import All from "./All";

it("has a All component", () => {
  const { getByText } = render(<All />);
  expect(getByText("All")).toBeInTheDocument();
});
