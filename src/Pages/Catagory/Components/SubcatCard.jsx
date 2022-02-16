import React from "react";
import { Paper, Box, Typography } from "@mui/material";
function SubcatCard({ data }) {
  return (
    <Paper sx={{ paddingY: "15%" }}>
      <Box width={"70%"} sx={{ margin: "auto" }}>
        <Typography variant="h6">{data}</Typography>
      </Box>
    </Paper>
  );
}

export default SubcatCard;
