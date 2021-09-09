import React, { useState } from "react";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { Fab, Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [input, SetInput] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    SetInput((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  function handleClick(event) {
    props.onAdd(input);
    event.preventDefault();
    SetInput({ title: "", content: "" });
  }

  function toggle() {
    setExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={input.title}
          />
        ) : null}
        <textarea
          onClick={toggle}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={input.content}
        />
        <Zoom in={true}>
          <Fab onClick={handleClick}>
            <NoteAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
