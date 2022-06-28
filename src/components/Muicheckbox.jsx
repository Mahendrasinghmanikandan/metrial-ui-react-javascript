import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
const Muicheckbox = () => {
  const [language, setLanguage] = useState([]);
  const handleChange = (e) => {
    let index = language.indexOf(e.target.value);
    if (index === -1) {
      setLanguage([...language, e.target.value]);
    } else {
      setLanguage(
        language.filter((lan) => {
          return lan !== e.target.value;
        })
      );
    }
  };
  return (
    <Box width="400px">
      <FormControl>
        <FormLabel>Select languages</FormLabel>
        <FormGroup>
          <FormControlLabel
            label="Tamil"
            onChange={handleChange}
            control={<Checkbox />}
            value="Tamil"
            checked={language.includes("Tamil")}
          />
          <FormControlLabel
            label="English"
            onChange={handleChange}
            control={<Checkbox />}
            value="English"
            checked={language.includes("English")}
          />
        </FormGroup>
      </FormControl>
      {console.log(language)}
      {language.map((lan) => {
        return <h1>{lan}</h1>;
      })}
    </Box>
  );
};

export default Muicheckbox;
