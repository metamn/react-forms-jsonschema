import React from "react";
import All from "./All";
import ApiDoc from "./All.md";

export default {
  component: All,
  title: "All",
  parameters: { notes: ApiDoc }
};

export const Default = () => <All />;
