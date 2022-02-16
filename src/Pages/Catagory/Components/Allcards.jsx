import React from "react";
import { Grid } from "@mui/material";
import CourseCard from "./CourseCard";
function Allcards({ data }) {
  return (
    <Grid container>
      {data?.map((el) => {
        return (
          <Grid item xs={11.5} key={el?._id}>
            <CourseCard cardData={el} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Allcards;
