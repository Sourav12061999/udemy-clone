import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { description } from "../Styles/course";
function Description({ content }) {
  return (
    <Card sx={description.card}>
      <CardContent>
        <Typography sx={description.heading} variant="h4">
          Description
        </Typography>
        <Typography sx={{ ml: 2 }}>{content}</Typography>
      </CardContent>
    </Card>
  );
}

export default Description;
