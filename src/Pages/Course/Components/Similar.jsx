import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import url from "../../../env";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import CourseCard from "../../../Components/Course-Card/CourseCard";
import Skeletoncard from "../../../Components/Course-Card/Skeletoncard";
import Grid from "@mui/material/Grid";
function Similar({ setcourseID, course_id }) {
  const [similarData, setsimilarData] = useState([]);
  const { course } = useParams();
  useEffect(() => {
    fetch(`${url}/CourseCard/getCards/courseId=${course}`)
      .then((res) => res.json())
      .then((res) => {
        let arr = res.filter((el) => {
          if (el.course_id == course_id) setcourseID(el._id);
          return el.course_id !== course_id;
        });
        setsimilarData(arr);
      })
      .catch((error) => console.error(error));
  }, [course]);

  return (
    <Box>
      <Typography variant="h5" sx={{ ml: 1, mb: 2 }}>
        Courses of Same Catagory
      </Typography>
      <Grid container sx={{ width: "100%" }}>
        {similarData ? (
          <>
            {similarData.map((card) => {
              return (
                <Grid
                  item
                  sx={{ ml: 1.3, mb: 1 }}
                  xs={11}
                  sm={6}
                  md={4.5}
                  lg={2.7}
                  key={card._id}
                >
                  <CourseCard data={card} />
                </Grid>
              );
            })}
          </>
        ) : (
          <>
            <Skeletoncard />
            <Skeletoncard />
            <Skeletoncard />
            <Skeletoncard />
            <Skeletoncard />
          </>
        )}
      </Grid>
    </Box>
  );
}

export default Similar;
