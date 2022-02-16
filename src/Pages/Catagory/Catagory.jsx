import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import url from "../../env";
import Subcat from "./Components/Subcat";
import Allcards from "./Components/Allcards";
function Catagory() {
  const { catagory } = useParams();
  const [data, setData] = useState(null);
  const [catagoryData, setcatagoryData] = useState(null);
  useEffect(() => {
    fetch(`${url}/CourseCard/getCards/catagory=${catagory}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [catagory]);
  useEffect(() => {
    fetch(`${url}/CourseCard/getCatagory/${catagory}`)
      .then((res) => res.json())
      .then((data) => {
        setcatagoryData(data);
      });
  }, [catagory]);

  return (
    <Box sx={{ width: "90%", margin: "auto" }}>
      <Typography variant="h3" sx={{ my: 5, textAlign: "center" }}>
        {catagory}
      </Typography>
      <Subcat data={catagoryData?.subcat} />
      <Allcards data={data} />
    </Box>
  );
}

export default Catagory;
