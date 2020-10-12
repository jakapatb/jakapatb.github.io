import React from "react";
import styled from "styled-components";

const Div = styled.div`
  font-size: 10rem;
  color: black;
  font-weight: 500;
  text-shadow: 0.375rem 0.125rem #ff0000;
  transform: skewX(-6deg);
`;
interface Props {
  children: string;
}
export const TextWithBackground: React.FC<Props> = ({ children }) => {
  return <Div>{children}</Div>;
};
