import React from "react";
import Image from "./Components/Image";
import Catagory from "./Components/Catagory";
import { Typography } from "@mui/material";
function Home() {
  return (
    <div>
      <Image />
      <div style={{ width: "90%", margin: "auto", marginTop: "2%" }}>
        <Typography variant="h3" sx={{ mb: 3 }}>
          What to learn next!
        </Typography>
        <Catagory heading={"Courses in Web Development"} />
        <Catagory heading={"Courses in Business"} />
        <Catagory heading={"Courses in Marketing"} />
      </div>
    </div>
  );
}

export default Home;
