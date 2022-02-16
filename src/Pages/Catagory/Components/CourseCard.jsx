import React, { useEffect, useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { courseCard } from "../styles/styles";
import Rating from "@mui/material/Rating";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import useUpdatecart from "../../../Hooks/useUpdatecart";
import Snackbarcomp from "../../../Components/Snackbar/Snackbarcomp";
function CourseCard({ cardData }) {
  const { snackbarState, openSnackbar, setOpenSnackbar, update_cart } =
    useUpdatecart();
  return (
    <>
      {cardData ? (
        <Card sx={courseCard.Card}>
          <Box>
            <CardMedia
              component="img"
              height={220}
              image={cardData?.image}
              alt="Course card"
              sx={{ width: { xs: "100%" } }}
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
              <Button
                variant="contained"
                color={"secondary"}
                sx={{ mt: { xs: 1, md: 2, lg: 5 } }}
                onClick={() => {
                  update_cart(cardData._id);
                }}
              >
                Add to cart
              </Button>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Box sx={courseCard.Card}>
          <Box sx={{ width: { xs: "100%" } }}>
            <Skeleton variant="rectangular" width={"100%"} height={220} />
          </Box>
          <Box sx={courseCard.cardcontent}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        </Box>
      )}

      <Snackbarcomp
        open={openSnackbar}
        setOpen={setOpenSnackbar}
        note={snackbarState.note}
        severity={snackbarState.severity}
      />
    </>
  );
}

export default CourseCard;
