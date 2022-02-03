import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { list_description } from "../Styles/course";
function Listdescription({ data, heading, Icon }) {
  return (
    <Card sx={list_description.card}>
      <CardContent>
        <Typography variant="h4" sx={{ ml: 3 }}>
          {heading}
        </Typography>
        <List>
          {data.map((el) => {
            return (
              <ListItem key={el}>
                <ListItemAvatar>
                  <Icon />
                </ListItemAvatar>
                <ListItemText primary={el} />
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
}

export default Listdescription;
