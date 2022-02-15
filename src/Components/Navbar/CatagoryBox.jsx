import * as React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { blue } from "@mui/material/colors";
import catagory from "../../catagories";
import { Link } from "react-router-dom";
function CatagoryBox({ open, setOpen }) {
  return (
    <Dialog onClick={() => setOpen(false)} open={open}>
      <DialogTitle>All Catagories</DialogTitle>
      <List sx={{ pt: 0 }}>
        {catagory.map((el) => {
          let Icons = el.icon;
          return (
            <Link to={`/${el.name.split(" ")[0]}`}>
              <ListItem button key={el.name}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <Icons />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={el.name} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Dialog>
  );
}
export default CatagoryBox;
