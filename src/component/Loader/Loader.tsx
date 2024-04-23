import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";


function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
      />
    </React.Fragment>
  );
}

export default function Loader() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      sx={{ flexGrow: 1, paddingBottom:'40px'}}
    >
      <GradientCircularProgress />
    </Stack>
  );
}
