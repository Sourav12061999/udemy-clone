import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Button, TextField, Typography } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import useSignin from "../../Hooks/useSignin";
import Snackbarcomp from "../Snackbar/Snackbarcomp";
function Signin() {
  const [values, setValues] = useState({
    password: "",
    email: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { error, Signin, note, setError } = useSignin();
  return (
    <>
      <Paper
        sx={{
          height: "400px",
          width: "90%",
          maxWidth: "500px",
          margin: "auto",
          mt: 4,
          boxSizing: "border-box",
          padding: "2%",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
          Login
        </Typography>
        <TextField
          id="standard-error-helper-text"
          error={error.status}
          helperText={error.msg}
          variant="standard"
          fullWidth
          onChange={handleChange("email")}
        />
        <Input
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          sx={{ width: "100%", my: 3 }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button
          onClick={() => {
            if (values.email && values.password) {
              Signin({
                password: values.password,
                email: values.email,
              });
            }
          }}
          variant="contained"
          color="secondary"
          sx={{ mt: 2 }}
          fullWidth
        >
          Submit
        </Button>
      </Paper>
      <Snackbarcomp
        open={error}
        setOpen={setError}
        severity={"warning"}
        note={note}
      />
    </>
  );
}

export default Signin;
