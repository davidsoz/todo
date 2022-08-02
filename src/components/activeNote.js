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
  id,
  label,
  setChecked,
  checked,
  menuItems,
  removeActiveNote,
}) {

  return (
    <Active>
      <FormControlLabel
        control={<Checkbox key={id} />}
        label={label}
      />
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">color</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="color"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {menuItems.map((menuItem) => {
              return (
                <MenuItem
                  key={menuItem.value}
                  style={{ color: menuItem.color }}
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
            id={id}
            onClick={(e) => removeActiveNote(e)}
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
