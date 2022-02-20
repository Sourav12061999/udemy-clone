import React, { useState, useContext } from "react";
import url from "../env";
import { UserdataContest } from "../App";
function useSignup() {
  const { userData, setUserData } = useContext(UserdataContest);
  const [error, setError] = useState({
    status: false,
    msg: "",
  });
  function Signup(data) {
    fetch(`${url}/getuser/Signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data._id) {
          setError({
            status: true,
            msg: data,
          });
        } else {
          setUserData(data);
          localStorage.setItem("userID", JSON.stringify(data._id));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return { error, Signup };
}

export default useSignup;
