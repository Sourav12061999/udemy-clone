import { useContext } from "react";
import url from "../env";
import { UserdataContest } from "../App";
function useUpdatecart() {
  const { userData, setUserData } = useContext(UserdataContest);
  return function update_cart(course_id) {
    if (!userData) {
      alert("Please Sign in/Sign up to add to cart");
    } else if (userData?.cartCourses?.includes(course_id)) {
      alert("This course already in your cart");
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
          setUserData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
}

export default useUpdatecart;
