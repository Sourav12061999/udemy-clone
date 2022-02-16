import * as React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { purple } from "@mui/material/colors";
import catagory from "../../catagories";
import { Link } from "react-router-dom";
function CatagoryBox({ open, setOpen }) {
  return (
    <Dialog onClick={() => setOpen(false)} open={open}>
      <DialogTitle>All Catagories</DialogTitle>
      <List sx={{ pt: 0 }}>
        {catagory.map((el, i) => {
          let Icons = el.icon;
          return (
            <Link key={el.name} to={`/catagory/${el.name}`}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: purple[100], color: purple[600] }}>
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
