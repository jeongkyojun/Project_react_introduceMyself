import React from "react";
import { StyledButton } from "./styles";
import { PropTypes } from "./types";


const Button = ({ children}:PropTypes) => {
  return (
    <StyledButton> {children} </StyledButton>
  );
}

export default Button;