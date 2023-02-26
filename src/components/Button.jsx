import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #1266f1;
  color: #fff;
  text-transform: uppercase;
  border: 0;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%), 0 2px 10px 0 rgb(0 0 0 / 10%);
  font-weight: 500;
  padding: 0.625rem 1.5rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1.5;
  cursor: pointer;
  display: block;
  margin-inline: auto;
  &:hover {
    box-shadow: 0 8px 9px -4px rgb(59 113 202 / 30%),
      0 4px 18px 0 rgb(59 113 202 / 20%);
  }
`;

const Button = ({children}) => {
  return <ButtonStyled type="submit">{children}</ButtonStyled>;
};

export default Button;
