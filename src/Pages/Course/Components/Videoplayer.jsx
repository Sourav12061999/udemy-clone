import React from "react";
import Player from "./Player";
import Dialog from "@mui/material/Dialog";
function Videoplayer({ videolink, play, setPlay }) {
  return (
    <Dialog
      sx={{ color: "#fff", zIndex: 100 }}
      open={play}
      onClick={() => setPlay(false)}
    >
      <Player src={videolink} />
    </Dialog>
  );
}

export default Videoplayer;
