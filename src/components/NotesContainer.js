import styled from "styled-components";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ActiveNote from "./ActiveNote";

const Container = styled.div`
  width: 750px;
  margin: 30px auto;
  padding: 10px 5px;
  background-color: #fff;
  box-shadow: 0px 0px 15px 2px rgba(71, 70, 70, 0.75);
  > .active-notes {
    max-height: 350px;
    overflow-y: scroll;
  }
`;

const TodoFooter = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  .actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    > div:first-child {
      text-align: center;
      font-weight: bold;
    }
    > div.colors {
      display: flex;
      flex-direction: column;
      gap: -10px;
    }
  }
`;

const InputProps = {
  style: { fontSize: 36, color: "#8f8f89", paddingLeft: 50 },
};

function NotesContainer() {
  const [notes, setNotes] = useState([]);
  // const [checked, setChecked] = useState(false);
  const [noteText, setNoteText] = useState(``);

  const menuItems = [
    { color: "green", value: 1, label: "Green" },
    { color: "blue", value: 2, label: "Blue" },
    { color: "orange", value: 3, label: "Orange" },
    { color: "purple", value: 4, label: "Purple" },
    { color: "red", value: 5, label: "Red" },
  ];

  function moveToActive(e) {
    if (e.key === "Enter" && noteText.length > 2) {
      e.preventDefault();
      setNotes([
        ...notes,
        {
          text: noteText,
          id: !notes.length ? 0 : notes[notes.length - 1].id + 1,
          // checked: checked,
        },
      ]);
      setNoteText(``);
    }
  }

  function removeActiveNote(e) {
    const filteredNotes = notes.filter(
      (note) => note.id !== Number(e.target.id)
    );
    setNotes(filteredNotes);
  }

 

  return (
    <Container>
      <div>
        <TextField
          autoFocus
          variant="standard"
          fullWidth
          placeholder="What needs to be done?"
          onChange={(e) => setNoteText(e.target.value)}
          value={noteText}
          InputProps={InputProps}
          onKeyPress={(e) => moveToActive(e)}
        />
      </div>
      <div className="active-notes">
        {notes.map((note) => (
          <ActiveNote
            removeActiveNote={removeActiveNote}
            key={note.id}
            id={note.id}
            label={note.text}
            // checked={checked}
            // setChecked={setChecked}
            menuItems={menuItems}
          />
        ))}
      </div>
      {notes.length ? (
        <TodoFooter>
          <div className="actions">
            <div>Actions</div>
            <Button variant="contained" size="small">
              mark all completed
            </Button>
            <Button variant="contained" size="small">
              clear completed
            </Button>
          </div>
          <div className="actions">
            <div>Remaining todos</div>
            <div>{notes.length} Item Left</div>
          </div>
          <div className="actions">
            <div>Filter By Status</div>
            <div>All</div>
            <div>Active</div>
            <div>Completed</div>
          </div>
          <div className="actions">
            <div>Filter By Color</div>
            <div className="colors">
              {menuItems.map((item) => (
                <FormControlLabel
                  key={item.value}
                  control={<Checkbox onChange={() => {}} />}
                  label={item.label}
                />
              ))}
            </div>
          </div>
        </TodoFooter>
      ) : null}
    </Container>
  );
}

export default NotesContainer;


function solution(A) {
  let i=1;
  let minNum
  while(i<100000) {
      for(let j=0; j<A.length; j++){
          if(i != A[j] && Math.sign(A[j]) == 1){
              minNum=i;
          }
      }
      i++
  }
  return minNum
}