import React, { useState } from "react";
import { Box, Typography, Rating, Button } from "@mui/material";
import { blackBox } from "../Styles/course";
import Videoplayer from "./Videoplayer";
import { BsFillPlayFill } from "react-icons/bs";
function Blackbox({ heading, subheading, rating, students, image, video }) {
  const [play, setPlay] = useState(false);
  return (
    <>
      <Box sx={blackBox.box}>
        <Box sx={blackBox.textBox}>
          <Typography variant="h4">{heading}</Typography>
          <Typography variant="h7">{subheading}</Typography>
          <Box sx={blackBox.rating}>
            <Typography sx={blackBox.ratingText}>{rating}</Typography>
            <Rating value={rating} readOnly precision={0.5} />
            <Typography>( {students} students)</Typography>
          </Box>
          <Button
            onClick={() => {
              setPlay(true);
            }}
            sx={{ mt: 1 }}
            color="secondary"
            variant="contained"
            startIcon={<BsFillPlayFill />}
          >
            Play
          </Button>
        </Box>
        <Box sx={blackBox.image}>
          <img style={{ width: "100%" }} src={image} alt="" />
        </Box>
      </Box>
      <Videoplayer play={play} setPlay={setPlay} videolink={video} />
    </>
  );
}

export default Blackbox;
