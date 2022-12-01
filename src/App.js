import "./styles.css";
import React, { useEffect } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

export default function App() {
  const initialValues = { userName: "", email: "", password: "" };
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formError, setFormError] = React.useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateFormData(formValues));
  };
  const validateFormData = (values) => {
    const errors = {};
    console.log("validate : ", values.userName);
    if (!values.userName) {
      errors.userName = "User Name is Required";
    } else errors.userName = " ";
    if (!values.email) {
      errors.email = "Email is  Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Enter valid mail";
    } else {
      errors.email = "";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    }
    return errors;
  };
  useEffect(() => {}, [formValues]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch", mx: 20 }
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 style={{ marginLeft: 180 }}>Sign Up</h3>
            <TextField
              required
              id="outlined-required"
              label="User Name"
              name={formValues.userName}
              defaultValue="User Name"
              onChange={handleChange}
            />
            <p>{formError.userName}</p>

            <TextField
              required
              id="outlined-required"
              name={formValues.email}
              label="Email"
              defaultValue="Email"
              onchange={handleChange}
            />
            <p>{formError.email}</p>
            <TextField
              required
              type="password"
              Name={formValues.password}
              id="outlined-required"
              label="Password"
              defaultValue="Password"
              onchange={handleChange}
            />
            <p>{formError.password}</p>

            <Button
              variant="contained"
              color="success"
              sx={{ width: 200, mx: 20 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Box>
      </form>
    </>
  );
}
