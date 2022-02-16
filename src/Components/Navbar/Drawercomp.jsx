import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import catagory from "../../catagories";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import url from "../../env";
export default function Drawercomp({ state, setState, userData }) {
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {catagory?.map((element) => {
          let Icon = element.icon;
          return (
            <Link to={`/catagory/${element.name}`} key={element.name}>
              <ListItem button>
                <ListItemIcon color="secondary">
                  <Icon size={"20px"} />
                </ListItemIcon>
                <ListItemText primary={element.name} />
              </ListItem>
            </Link>
          );
        })}
      </List>
      {!userData ? (
        <>
          <Divider />
          <a href={`${url}/userSignup/auth/google`}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                color: "white",
                background: "black",
                ":hover": {
                  background: "#424242",
                },
              }}
            >
              Sign up
            </Button>
          </a>
        </>
      ) : (
        <></>
      )}
    </Box>
  );

  return (
    <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
}
