import React, { useReducer } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { blueCharcoal } from "./../config/theme";

import { useIndexedDB } from "react-indexed-db";

const initialState = { title: "", text: "" };

function reducer(state, action) {
  switch (action.type) {
    case "title":
      return { title: action.value, text: state.text };
    case "text":
      return { title: state.title, text: action.value };
    case "clear":
      return { title: "", text: "" };
    default:
      throw new Error();
  }
}

export default function NewPost() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { add } = useIndexedDB("articles");
  console.log(state);
  return (
    <div style={{ textAlign: "start", padding: "20px" }}>
      <div style={{ padding: "5px", boxSizing: "border-box" }}>
        <Input
          placeholder="Title"
          value={state.title}
          onChange={(event) =>
            dispatch({ type: "title", value: event.target.value })
          }
        />
      </div>
      <div style={{ padding: "5px" }}>
        <div
          style={{ border: `1px solid ${blueCharcoal}`, borderRadius: "5px" }}
        >
          <ReactQuill
            theme="snow"
            modules={{
              toolbar: [
                ["bold", "italic", "underline", "strike"],
                [{ header: [6, 5, 4, 3, 2, 1] }],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link"],
              ],
              clipboard: {
                matchVisual: false,
              },
            }}
            formats={[
              "header",
              "font",
              "size",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "list",
              "bullet",
              "indent",
              "link",
              "image",
              "video",
              "align",
            ]}
            placeholder="Write text here..."
            value={state.text}
            onChange={(html) => dispatch({ type: "text", value: html })}
          />
        </div>
      </div>
      <div style={{ padding: "5px" }}>
        <Button
          style={{ width: "25%" }}
          onClick={() =>
            add({ title: state.title, text: state.text }).then(
              (event) => {
                dispatch({ type: "clear" });
              },
              (error) => {
                console.log(error);
              }
            )
          }
        >
          Add
        </Button>
      </div>
    </div>
  );
}
