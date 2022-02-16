import { useContext, useState } from "react";
import url from "../env";
import { UserdataContest } from "../App";
function useUpdatecart() {
  const { userData, setUserData } = useContext(UserdataContest);
  const [snackbarState, setSnackbarState] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  function handleOpen() {
    setOpenSnackbar(true);
    setSnackbarState({
      note: "Course Added to cart",
      severity: "success",
    });
  }
  function handleWarning(note) {
    setOpenSnackbar(true);
    setSnackbarState({
      note,
      severity: "error",
    });
  }
  function update_cart(course_id) {
    if (!userData) {
      handleWarning("Please Sign in/Sign up to add to cart");
    } else if (userData?.cartCourses?.includes(course_id)) {
      handleWarning("This course already in your cart");
    } else {
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
          handleOpen();
          setUserData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  return { snackbarState, openSnackbar, setOpenSnackbar, update_cart };
}

export default useUpdatecart;
