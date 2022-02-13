import React, { useEffect, useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { courseCard } from "../../Pages/Cart/cartstyle";
import Rating from "@mui/material/Rating";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import url from "../../env";
import { UserdataContest } from "../../App";
function CourseCard({ id, settotalCart }) {
  const [cardData, setcardData] = useState(null);
  const { userData, setUserData } = useContext(UserdataContest);
  useEffect(() => {
    fetch(`${url}/CourseCard/getCards/cardID=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setcardData(res);
        settotalCart((prev) => prev + res.price);
      });
  }, []);
  function deleteCartUser(id, userData) {
    let cartArray = userData?.cartCourses?.filter((el) => {
      return el != id;
    });

    return cartArray;
  }
  function deleteCart(id, userData) {
    fetch(`${url}/getuser/deleteCart/${userData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userData,
        cartCourses: deleteCartUser(id, userData),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setUserData(res);
      });
  }
  return (
    <>
      {cardData ? (
        <Card sx={courseCard.Card}>
          <Box>
            <CardMedia
              component="img"
              height={220}
              image={cardData?.image}
              alt="green iguana"
              sx={{ width: "350px" }}
            />
          </Box>
          <CardContent sx={courseCard.cardcontent}>
            <Box>
              <Link to={`/courses/${cardData?.course_id}`}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    ":hover": {
                      cursor: "pointer",
                      color: "#e040fb",
                      textDecoration: "underline",
                    },
                  }}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  {cardData?.heading}
                </Typography>
              </Link>
              <Rating readOnly value={cardData?.rating} precision={0.1} />
              <Typography sx={courseCard.price}>₹{cardData?.price}</Typography>
            </Box>
            <Box>
              <Button
                onClick={() => {
                  settotalCart((prev) => prev - cardData?.price);
                  deleteCart(id, userData);
                  // console.log(id);
                }}
                startIcon={<DeleteIcon />}
                color="error"
              >
                Delete
              </Button>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
}

export default CourseCard;
