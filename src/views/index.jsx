/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from "react";
import { ThemeProvider } from "styled-components";
import * as theme from "../config/theme";
import Button from "../components/Button";
import Search from "../components/Search";
import Divider from "../components/Divider";
import NewPost from "../components/NewPost";
import Published from "./../components/Published";
import { DBConfig } from "../config/db";
import { initDB } from "react-indexed-db";

initDB(DBConfig);

const initialState = { newPost: true, published: false };

function reducer(state, action) {
  switch (action.type) {
    case "newPost":
      return { newPost: true, published: false };
    case "published":
      return { newPost: false, published: true };
    default:
      throw new Error();
  }
}

export default function index() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: "100%",
          display: "block",
          position: "fixed",
          zIndex: 1000,
          height: "87%",
        }}
      >
        <Search />
        <Divider />
        <div
          style={{
            display: "flex",
            width: "100%",
            placeContent: "space-evenly",
          }}
        >
          <Button onClick={() => dispatch({ type: "newPost" })}>
            New Post
          </Button>
          <Button onClick={() => dispatch({ type: "published" })}>
            Published
          </Button>
        </div>
        <Divider />
        <div style={{ overflowY: "scroll", height: "inherit", width: "100%" }}>
          {state.newPost && <NewPost />}
          {state.published && <Published />}
        </div>
      </div>
    </ThemeProvider>
  );
}
