import React from "react";
import Annotations from "./Annotations";
import ApiDoc from "./Annotations.md";

export default {
  component: Annotations,
  title: "Annotations",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Annotations />;
