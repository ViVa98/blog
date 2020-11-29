/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { blueCharcoal } from "./../config/theme";
import { useIndexedDB } from "react-indexed-db";

const initialState = { data: [] };

function reducer(state, action) {
  switch (action.type) {
    case "data":
      return { data: action.data.reverse() };
    default:
      throw new Error();
  }
}

const Top = styled.div`
  text-align: start;
  padding: 20px;
  background-color: #fff;
  border: 1px solid ${blueCharcoal};
  border-radius: 5px;
  margin: 20px 60px;
  @media (max-width: 768px) {
    margin: 10px 20px;
  }
`;

const Title = styled.p`
  color: ${blueCharcoal};
  margin: 0;
  font-size: 18px;
  word-break: break-word;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;

const Description = styled.p`
  color: #282c34;
  margin: 10px 0;
  text-align: justify;
  font-size: 16px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`;

export default function Published() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { getAll } = useIndexedDB("articles");
  console.log(state.data);
  useEffect(() => {
    getAll().then((data) => dispatch({ type: "data", data }));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {state.data.length > 0 &&
        state.data.map((prop) => (
          <Top key={prop.id}>
            <Title>{prop.title}</Title>
            <Description dangerouslySetInnerHTML={{ __html: prop.text }} />
          </Top>
        ))}
    </div>
  );
}
