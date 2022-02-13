import React, { useContext, useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { UserdataContest } from "../../App";
import CourseCard from "../../Components/Course-card-vertical/CourseCard";
import { main } from "./cartstyle";
import Checkout from "./Components/Checkout";
function Cart() {
  const { userData, setUserData } = useContext(UserdataContest);
  const [totalCart, settotalCart] = useState(0);
  return (
    <Box sx={main.box}>
      <Typography sx={main.heading} variant="h4">
        Shopping Cart
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "70%" }}>
          {userData?.cartCourses.map((el, i) => {
            return (
              <React.Fragment key={el}>
                <CourseCard
                  setUserData={setUserData}
                  settotalCart={settotalCart}
                  id={el}
                />
              </React.Fragment>
            );
          })}
        </Box>
        <Box sx={{ width: "29%", ml: 1 }}>
          <Checkout totalCart={totalCart} />
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
