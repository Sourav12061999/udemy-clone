import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
function Skeletoncard() {
  return (
    <Grid item xs={2.4} sx={{ height: "300px", padding: 0 }}>
      <Skeleton varient="rectangular" width="90%" height="80%" sx={{ mb: 0 }} />
      <Skeleton variant="text" width={"90%"} />
      <Skeleton variant="text" width={"50%"} />
    </Grid>
  );
}

export default Skeletoncard;
