import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
const MuiRating = () => {
  const [ratings, setRatings] = useState(null);
  return (
    <Stack spacing={2}>
      <Rating
        // highlightSelectedOnly
        value={ratings}
        onChange={(e) => {
          setRatings((pre) =>
            pre === e.target.value ? e.target.value - 1 : e.target.value
          );
        }}
        // readOnly
        icon={<FavoriteIcon color="error" />}
        emptyIcon={
          <FavoriteIcon
            color="
            error
          "
          />
        }
      />
      <Rating precision={0.5} size="large" />
    </Stack>
  );
};

export default MuiRating;
