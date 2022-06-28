import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
const Muiautocomplete = () => {
  const [day, setDay] = useState();
  const data = [
    "monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <Stack spacing={2} width="430px">
      <Autocomplete
        fullWidth
        value={day}
        onChange={(e, newValue) => {
          setDay(newValue);
          console.log(newValue);
        }}
        options={data}
        renderInput={(datas) => <TextField {...datas} />}
      />
      {day}
    </Stack>
  );
};

export default Muiautocomplete;
