import React from "react";
import { Button, IconButton, Stack } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Fingerprint } from "@mui/icons-material";

const Buttons = () => {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text" disabled href="https://www.google.com">
          Text
        </Button>
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Text</Button>
      </Stack>
      <Stack spacing={4} direction="row" mt={3}>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Stack>
      <Stack mt={3} display="block" spacing={3} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button
          elevation={0}
          startIcon={<PhotoCamera />}
          endIcon={<PhotoCamera />}
          variant="contained"
          size="large"
        >
          Large
        </Button>
        <IconButton aria-label="fingerprint" color="secondary">
          <Fingerprint />
        </IconButton>
      </Stack>
    </div>
  );
};

export default Buttons;
