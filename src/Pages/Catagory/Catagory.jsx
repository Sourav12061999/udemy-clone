import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
function Catagory() {
  const { catagory } = useParams();
  const [data, setData] = useState(null);
  const [catagoryData, setcatagoryData] = useState(null);
  return <Box>Catagory</Box>;
}

export default Catagory;
