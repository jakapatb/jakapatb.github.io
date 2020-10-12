import React from "react";
import styled from "styled-components";

const Div = styled.span`
  background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 10rem;
  font-weight: 900;
`;
export const TextGradient: React.FC = ({ children }) => {
  return <Div>{children}</Div>;
};
