import React from "react";
import { TextGradient } from "./TextGradient";

export default {
  component: TextGradient,
  title: "showcase/Text Gradient",
};

export const Basic = ({ children }) => <TextGradient>{children}</TextGradient>;
Basic.args = {
  children: "Gradient",
};
