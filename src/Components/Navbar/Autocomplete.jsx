import React from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
function Autocomplete() {
  const Autocomplete = styled(Paper)(({ theme }) => ({
    width: "95%",
    height: "300px",
    position: "absolute",
    zIndex: 1000,
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
  return <Autocomplete>Autocomplete</Autocomplete>;
}

export default Autocomplete;
