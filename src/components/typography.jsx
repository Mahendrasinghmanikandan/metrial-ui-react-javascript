import React from "react";
import { Typography } from "@mui/material";

const Typograph = () => {
  return (
    <div>
      <Typography variant="h1">heading 1</Typography>
      <Typography variant="h2">heading 2</Typography>
      <Typography variant="h3">heading 3</Typography>
      <Typography variant="h4">heading 4</Typography>
      <Typography variant="h5">heading 5</Typography>
      <Typography variant="h6" gutterBottom>
        heading 6
      </Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
        tempora nisi eos ipsa magni, non eius vitae? Dolorem blanditiis libero
        perferendis fugiat soluta laudantium, molestiae nostrum nisi alias illo
        fugit.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempore!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempore!
      </Typography>
    </div>
  );
};

export default Typograph;
