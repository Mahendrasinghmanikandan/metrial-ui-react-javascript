import React from "react";
import { Button, ButtonGroup } from "@mui/material";
const ButtonGroups = () => {
  return (
    <div>
      <ButtonGroup variant="outlined" orientation="horizontal">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroups;
