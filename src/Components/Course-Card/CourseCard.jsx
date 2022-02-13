import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Rating } from "@mui/material";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { UserdataContest } from "../../App";
import url from "../../env";
import CircularProgress from "@mui/material/CircularProgress";

export default function CourseCard({ data }) {
  const { userData, setUserData } = useContext(UserdataContest);
  const [showLoader, setshowLoader] = useState(false);
  function update_cart(course_id) {
    if (!userData) {
      alert("Please Sign in/Sign up to add to cart");
    } else if (userData?.cartCourses?.includes(course_id)) {
      alert("This course already in your cart");
    } else {
      setshowLoader(true);
      userData?.cartCourses?.push(course_id);
      fetch(`${url}/getuser/updateCard/${userData?._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          setshowLoader(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={data.image}
        alt="green iguana"
      />
      <CardContent>
        <Link
          to={`/courses/${data.course_id}`}
          onClick={() => scroll.scrollToTop()}
        >
          <Box
            overflow="hidden"
            whiteSpace="pre-line"
            textOverflow="ellipsis"
            height={40}
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              ":hover": {
                cursor: "pointer",
                color: "#e040fb",
                textDecoration: "underline",
              },
            }}
          >
            {data.heading}
          </Box>
        </Link>
        <Typography
          noWrap
          sx={{ fontSize: "12px", my: 0.5 }}
          variant="body2"
          color="text.secondary"
        >
          {data.author}
        </Typography>
        <Rating name="read-only" value={data.rating} precision={0.1} readOnly />
        <Typography sx={{ fontWeight: 600 }}>₹{data.price}</Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          color="secondary"
          variant="contained"
          endIcon={<BsFillCartPlusFill />}
          onClick={() => {
            update_cart(data._id);
          }}
        >
          {!showLoader ? (
            <>Cart</>
          ) : (
            <CircularProgress sx={{ height: "80%" }} color="secondary" />
          )}
        </Button>
      </CardActions>
    </Card>
  );
}
