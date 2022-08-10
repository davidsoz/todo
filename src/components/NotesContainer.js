import styled from "styled-components";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
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
    > div.status {
      > div {
        margin-top: 10px;
        cursor: pointer;
      }
      > div:hover {
        opacity: 0.6
      }
    }
	}
`;

const InputProps = {
	style: { fontSize: 36, color: "#8f8f89", paddingLeft: 50 },
};

const menuItems = [
  { value: "None", label: "None" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "orange", label: "Orange" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
];

function NotesContainer() {
	const [notes, setNotes] = useState([]);
	const [noteText, setNoteText] = useState(``);
  const [filterColors, setFilterColors] = useState([]);
  const [filterStatus, setFilterstatus] = useState('all');


	function moveToActive(e) {
		if (e.key === "Enter" && noteText.length > 1) {
			e.preventDefault();
			setNotes([
				...notes,
				{
					text: noteText,
					id: notes[notes.length - 1]?.id + 1 || 0,
          color: 'None',
					completed: false,
				},
			]);
			setNoteText(``);
		}
	}

	function removeActiveNote(id) {
		const filteredNotes = notes.filter(
			(note) => note.id !== Number(id)
		);
		setNotes(filteredNotes);
	}

  function updateNoteProp(id, prop, value) { // 
    const nextNotes = [...notes];
    const noteIndex = notes.findIndex(note => note.id === id);
    const nextNote = {
      ...notes[noteIndex],
      [prop]: value
    };

    nextNotes.splice(noteIndex, 1, nextNote);
    setNotes(nextNotes);    
  }

  function updateColor(id, color) {
    updateNoteProp(id, 'color', color);
  }

  function toggleFilterColor(color) {
    let nextFilterColors = [...filterColors];
    if(nextFilterColors.includes(color)) {
      nextFilterColors = nextFilterColors.filter(c => c !== color);
    } else {
      nextFilterColors.push(color);
    }
    setFilterColors(nextFilterColors);
  }

  const filteredNotes = useMemo(() => {
    let nextNotes = notes;
    if(filterColors.length) {
      nextNotes = nextNotes.filter(note => filterColors.includes(note.color));
    }
    if(filterStatus !== 'all') {
      nextNotes = nextNotes.filter(note => note.completed === (filterStatus === 'completed'));
    }
    return nextNotes;
  }, [filterColors, notes, filterStatus]);

  function markAllCompleted() {
    let nextNotes = notes.map(note => {
      return {
        ...note,
        completed: true
      }
    })
    setNotes(nextNotes);
  }

  function ClearCompleted() {
    let nextNotes = notes.map(note => {
      return {
        ...note,
        completed: false
      }
    })
    setNotes(nextNotes);
  }

  useEffect(() => {
      let storedNotes = JSON.parse(localStorage.getItem('filteredNotes'));
      if(storedNotes) {
        setNotes(storedNotes);
      }
  }, [])

  useEffect(() => {
    console.log(notes);
    if(notes.length) {
      localStorage.setItem('filteredNotes', JSON.stringify(notes));
    }
  }, [notes])


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
				{filteredNotes.map((note) => (
					<ActiveNote
						removeActiveNote={() => removeActiveNote(note.id)}
						key={note.id}
						note={note}
            onSelect={() => updateNoteProp(note.id, 'completed', !note.completed)}
            onColorSelect={updateColor}
						menuItems={menuItems}
					/>
				))}
			</div>
				<TodoFooter>
					<div className="actions">
						<div>Actions</div>
						<Button variant="contained" size="small" onClick={markAllCompleted}>
							mark all completed
						</Button>
						<Button variant="contained" size="small" onClick={ClearCompleted}>
							clear completed
						</Button>
					</div>
					<div className="actions">
						<div>Remaining todos</div>
						<div>{filteredNotes.length} Item Left</div>
					</div>
					<div className="actions">
						<div>Filter By Status</div>
            <div className="status">
              <div onClick={() => setFilterstatus('all')}>All</div>
              <div onClick={() => setFilterstatus('active')}>Active</div>
              <div onClick={() => setFilterstatus('completed') }>Completed</div>
            </div>
					</div>
					<div className="actions">
						<div>Filter By Color</div>
						<div className="colors">
							{menuItems.map((item) => {
                  if(item.value === 'None') return null;
                  return <FormControlLabel
                    key={item.value}
                    control={<Checkbox onChange={() => toggleFilterColor(item.value)} />}
                    label={item.label}
                  />
              })}
						</div>
					</div>
				</TodoFooter>
		</Container>
	);
}

export default NotesContainer;