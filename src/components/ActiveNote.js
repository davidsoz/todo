import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";

import styled from "styled-components";

const Active = styled.div`
	display: flex;
	padding: 0 10px;
	justify-content: space-between;
	border-bottom: 2px solid lightgray;
	> div:last-child {
		display: flex;
		align-items: center;
	}
`;

function ActiveNote({
	note,
	onSelect,
	menuItems,
	removeActiveNote,
	onColorSelect
}) {
	const {id, text: label, color, completed} = note;
	return (
		<Active>
			<FormControlLabel control={<Checkbox key={note.id} onChange={onSelect} checked={completed} />} label={label} />
			<div>
				<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
					<InputLabel id="demo-select-small">color</InputLabel>
					<Select
						labelId="demo-select-small"
						id="demo-select-small"
						label="color"
						value={color}
						onChange={e => onColorSelect(id, e.target.value)}
					>
						{menuItems.map((menuItem) => {
							return (
								<MenuItem
									key={menuItem.value}
									style={{ color: menuItem.value }}
									value={menuItem.value}
								>
									{menuItem.label}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
				<div>
					<Button
						onClick={() => removeActiveNote(id)}
						style={{ color: "#df03fc" }}
					>
						&#10005;
					</Button>
				</div>
			</div>
		</Active>
	);
}

export default ActiveNote;
