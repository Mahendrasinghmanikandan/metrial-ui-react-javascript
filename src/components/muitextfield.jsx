import React, { useState } from "react";
import { TextField, Stack, InputAdornment } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Muitextfiels = () => {
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <div>
      <Stack direction="row">
        <Stack spacing={2}>
          <TextField
            label="password"
            type={!passwordShow && "password"}
            helperText="don't share your password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            color="warning"
            size="large"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {passwordShow ? (
                    <RemoveRedEyeIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setPasswordShow(!passwordShow);
                      }}
                    />
                  ) : (
                    <VisibilityOffIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setPasswordShow(!passwordShow);
                      }}
                    />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default Muitextfiels;
