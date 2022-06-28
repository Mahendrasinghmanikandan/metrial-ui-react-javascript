import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
const MuiradioButton = () => {
  return (
    <Box
      width="400px"
      height="400px"
      backgroundColor="white"
      color="black"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <FormControl>
        <FormLabel>Select Language</FormLabel>
        <RadioGroup
          //   row
          onChange={(e) => {
            console.log(e.target.value);
          }}
        >
          <FormControlLabel
            control={<Radio sx={{ "&.Mui-checked": { color: "green" } }} />}
            label="Tamil"
            value="Tamil"
            icon="k"
          />
          <FormControlLabel
            control={<Radio sx={{ "&.Mui-checked": { color: "green" } }} />}
            label="English"
            value="English"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiradioButton;
