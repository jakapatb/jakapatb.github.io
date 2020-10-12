import React from "react";
import { TextWithBackground } from "./TextWithBackground";

export default {
  component: TextWithBackground,
  title: "Showcase/Text With Background",
};
export const Basic = ({ children }) => (
  <TextWithBackground>{children}</TextWithBackground>
);
Basic.args = {
  children: "DASHBOARD",
};
