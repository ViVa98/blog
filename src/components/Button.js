/* eslint-disable default-case */
import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  background-color: ${(props) => props.theme.blueCharcoal};
  border: ${(props) => `1px solid ${props.theme.blueCharcoal}`};
  color: white;
  outline: none;
  padding: 10px 20px;
  transition: background-color 0.25s, color 0.25s;
  ${(props) => {
    switch (props.size) {
      case "small":
        return "font-size: 12px;";
      case "large":
        return "font-size: 20px;";
    }
    return "font-size: 16px;";
  }}
  ${(props) => {
    switch (props.use) {
      case "search":
        return "border-radius: 0 5px 5px 0;";
    }
    return "border-radius:5px;";
  }}
  &:hover {
    background-color: ${(props) => props.theme.whiteSmoke};
    color: ${(props) => props.theme.blueCharcoal};
    border: ${(props) => `1px solid ${props.theme.blueCharcoal}`};
    cursor: pointer;
  }
`;

export default Button;
