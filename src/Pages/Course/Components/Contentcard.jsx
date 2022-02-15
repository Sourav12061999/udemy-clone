import React from "react";
import { Button, Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { contentcard } from "../Styles/course";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { MdVideoLabel, MdOutlineContactPage } from "react-icons/md";
import { GrDocumentDownload, GrAchievement } from "react-icons/gr";
import { CgInfinity } from "react-icons/cg";
import { BsPhoneFill } from "react-icons/bs";
import { SiPytest } from "react-icons/si";
import useUpdatecart from "../../../Hooks/useUpdatecart";
function Contentcard({ price, data, course_id }) {
  const update_cart = useUpdatecart();
  const icons = [
    MdVideoLabel,
    MdOutlineContactPage,
    GrDocumentDownload,
    SiPytest,
    CgInfinity,
    BsPhoneFill,
    GrAchievement,
  ];
  return (
    <Card sx={contentcard.card}>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          ₹{price}
        </Typography>
        <Button
          onClick={() => {
            update_cart(course_id);
          }}
          color="secondary"
          fullWidth
          variant="contained"
        >
          Add to cart
        </Button>
        <Button sx={{ mt: 1, mb: 3 }} fullWidth variant="outlined">
          Buy Now
        </Button>
        <Typography sx={{ fontWeight: 800 }}>This Course Includes:</Typography>
        <List>
          {data?.map((el, i) => {
            let Icon = icons[i];
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

export default Contentcard;
