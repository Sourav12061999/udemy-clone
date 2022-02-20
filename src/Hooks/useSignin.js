import { useState, useContext } from "react";
import url from "../env";
import { UserdataContest } from "../App";
function useSignin() {
  const { userData, setUserData } = useContext(UserdataContest);
  const [error, setError] = useState(false);
  const [note, setNote] = useState("");
  function Signin(data) {
    fetch(`${url}/getuser/Signin/email=${data.email}/password=${data.password}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data._id) {
          setError(true);
          setNote(data);
        } else {
          setUserData(data);
          localStorage.setItem("userID", JSON.stringify(data._id));
        }
      });
  }
  return { error, Signin, note, setError };
}

export default useSignin;
