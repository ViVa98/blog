import React, { useReducer } from "react";
import styled from "styled-components";

const initialState = { text: "" };

function reducer(state, action) {
  switch (action.type) {
    case "text":
      return { text: action.value };
    case "clear":
      return { text: "" };
    default:
      throw new Error();
  }
}

export default function Search() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ margin: "20px" }}>
      <StyledInput className={"inputWithIcon"}>
        <SearchInput
          type="text"
          value={state.text}
          onChange={(event) =>
            dispatch({ type: "text", value: event.target.value })
          }
          placeholder="Search"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        />
        <SearchButton onClick={() => dispatch({ type: "clear" })}>
          X
        </SearchButton>
      </StyledInput>
    </div>
  );
}

const SearchInput = styled.input`
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.blueCharcoal};
  border-radius: 5px 0 0 5px;
  outline: none;
  padding: 10px;
  cursor: pointer;
`;

const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }
`;

const SearchButton = styled.button`
  appearance: none;
  background-color: ${(props) => props.theme.blueCharcoal};
  border: 0;
  color: white;
  outline: none;
  padding: 10px 20px;
  border: ${(props) => `1px solid ${props.theme.blueCharcoal}`};
  transition: background-color 0.25s, color 0.25s;
  font-size: 16px;
  border-radius: 0 5px 5px 0;
  &:hover {
    background-color: ${(props) => props.theme.Rhino};
    color: ${(props) => props.theme.whiteSmoke};
    border: ${(props) => `1px solid ${props.theme.Rhino}`};
    cursor: pointer;
  }
`;
