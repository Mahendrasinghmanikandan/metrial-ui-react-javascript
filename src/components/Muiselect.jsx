import React, { useState } from "react";
import { TextField, MenuItem, Box, Typography } from "@mui/material";

const Muiselect = () => {
  const [dep, setDepartment] = useState([]);
  return (
    <Box width="400px">
      <TextField
        label="Select Department"
        select
        fullWidth
        value={dep}
        name="Department"
        variant="outlined"
        SelectProps={{
          multiple: true,
        }}
        onChange={(e) => {
          let value = e.target.value;
          setDepartment(value);
        }}
      >
        {/* outLined,Standard, Filled*/}
        <MenuItem value="CSE">CSE</MenuItem>
        <MenuItem value="MECH">MECH</MenuItem>
        <MenuItem value="CIVIL">CIVIL</MenuItem>
        <MenuItem value="EEE">EEE</MenuItem>
        <MenuItem value="ECE">ECE</MenuItem>
      </TextField>
      {dep.map((res) => {
        return <Typography variant="h1">{res}</Typography>;
      })}
    </Box>
  );
};

export default Muiselect;
