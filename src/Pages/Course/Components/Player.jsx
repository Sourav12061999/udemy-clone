import React from "react";
function Player({ src }) {
  return (
    <>
      <iframe
        title="demo"
        style={{ maxWidth: "560px", height: "315px", width: "75vw" }}
        allowFullScreen
        src={src}
      />
    </>
  );
}

export default Player;
