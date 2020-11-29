/* eslint-disable default-case */
import styled from "styled-components";

const Input = styled.input`
  padding: 10px 10px;
  color: ${(props) => props.theme.blueCharcoal};
  background: none;
  outline: none;
  width: 100%;
  box-sizing: inherit;
  border: 1px solid ${(props) => props.theme.blueCharcoal};
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
        return "border-radius: 5px 0 0 5px;";
    }
    return "border-radius:5px;";
  }}
`;

export default Input;
