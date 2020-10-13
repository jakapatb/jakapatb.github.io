import React, { useState } from "react";
import "./button.css";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import _ from "lodash";
const ButtonContainer = styled.button`
  position: relative;
  width: 20rem;
  height: 8rem;
  overflow: hidden;
`;

const Ripple = styled(motion.span)`
  position: absolute;
  background: red;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 1em;
  height: 1em;
`;
export interface ButtonProps {
  duration: number;
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  duration,
  ...props
}) => {
  const [ripples, setRipples] = useState([]);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick();
    const x = e.clientX - e.currentTarget.offsetLeft;
    const y = e.clientY - e.currentTarget.offsetTop;
    const newRippleIndex = `${label}-${ripples.length + 1}`;
    setRipples((prev) => [...prev, { x, y, id: newRippleIndex }]);
    _.debounce(
      () =>
        setRipples((prev) => prev.filter(({ id }) => id !== newRippleIndex)),
      1000
    );
  };

  return (
    <ButtonContainer type="button" {...props} onClick={handleClick}>
      {label}
      <AnimatePresence>
        {ripples.map(({ x, y }, index) => (
          <Ripple
            key={index}
            style={{ left: x, top: y }}
            initial={{ fontSize: "0rem", opacity: 0.5 }}
            animate={{ fontSize: "20rem", opacity: 0 }}
            transition={{ duration }}
          />
        ))}
      </AnimatePresence>
    </ButtonContainer>
  );
};
