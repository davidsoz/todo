import {
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
  justify-content: space-between;
`;

function ActiveNote({ label }) {
  return (
    <Active>
      <FormControlLabel control={<Checkbox />} label={label} />
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
            <MenuItem style={{color: 'blue'}} value={10}>Blue</MenuItem>
            <MenuItem style={{color: 'green'}} value={20}>Green</MenuItem>
            <MenuItem style={{color: 'red'}} value={30}>Red</MenuItem>
            <MenuItem style={{color: 'red'}} value={30}>Red</MenuItem>
            <MenuItem style={{color: 'red'}} value={30}>Red</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Active>
  );
}

export default ActiveNote;
