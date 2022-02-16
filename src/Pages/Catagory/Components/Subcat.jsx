import React from "react";
import { Grid } from "@mui/material";
import SubcatCard from "./SubcatCard";
function Subcat({ data }) {
  return (
    <Grid container sx={{ mb: 5 }}>
      {data?.map((el) => {
        return (
          <Grid
            item
            xs={10.3}
            sm={5.8}
            md={3.8}
            lg={2.8}
            sx={{ ml: 1, mb: 1 }}
            key={el}
          >
            <SubcatCard data={el} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Subcat;
