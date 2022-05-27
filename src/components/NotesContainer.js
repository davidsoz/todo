import styled from "styled-components";
import { TextField } from "@mui/material";
import { useState } from "react";
import ActiveNote from "./activeNote";

const Container = styled.div`
  width: 750px;
  margin: 30px auto;
  padding: 10px 5px;
  background-color: #fff;
  box-shadow: 0px 0px 15px 2px rgba(71, 70, 70, 0.75);
`;

const InputProps = {
  style: { fontSize: 36, color: "#8f8f89", paddingLeft: 50 },
};

function NotesContainer() {
  const [noteValue, setNoteValue] = useState("");
  const [notes, setNotes] = useState([]);

  function moveToActive(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setNotes([...notes, e.target.value]);
      setNoteValue("");
    }
  }

  return (
    <Container>
      <div>
        <TextField
          variant="standard"
          fullWidth
          placeholder="What needs to be done"
          id="noteText"
          value={noteValue}
          onChange={(e) => setNoteValue(e.target.value)}
          InputProps={InputProps}
          onKeyPress={(e) => moveToActive(e)}
        />
      </div>
      <div>
        {notes.map((note) => (
          <ActiveNote label={note} />
        ))}
      </div>
    </Container>
  );
}

export default NotesContainer;
