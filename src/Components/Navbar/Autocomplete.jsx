import React from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Backdrop from "@mui/material/Backdrop";
function Autocomplete({ setOpen, open }) {
  const Autocomplete = styled(Paper)(({ theme }) => ({
    width: "40vw",
    height: "300px",
    position: "absolute",
    top: 39.9,
    overflowY: "scroll",
  }));
  const ListItemcomp = () => {
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
    );
  };
  return (
    <>
      <Backdrop
        sx={{
          color: "transparent",
          zIndex: 1,
          //   mt: 8,
        }}
        open={open}
        onClick={() => setOpen(false)}
      >
        <Autocomplete>
          <List></List>
        </Autocomplete>
      </Backdrop>
    </>
  );
}

export default Autocomplete;
