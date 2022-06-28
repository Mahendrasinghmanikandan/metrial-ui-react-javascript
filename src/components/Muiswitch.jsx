import React, { useState } from "react";
import { Box, Switch, FormControlLabel } from "@mui/material";
const Muiswitch = () => {
  const [mode, setMode] = useState(false);
  return (
    <Box width="400px">
      <FormControlLabel
        control={<Switch checked={mode} />}
        onChange={() => {
          setMode(!mode);
        }}
        label={mode ? "white mode" : "dark mode"}
      />
    </Box>
  );
};

export default Muiswitch;
