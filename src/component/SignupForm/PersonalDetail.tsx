import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { Card, InputAdornment, IconButton, Button } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

interface vlaues {
  FirstName: string;
  LastName: string;
  Email: string;
  password: string;
}

const registerSchema = yup.object({
  FirstName: yup
    .string()
    .min(4, "Provide Proper Name")
    .required("Enter First Name")
    .max(20, "Max 20 Characters"),

  LastName: yup
    .string()
    .min(4, "Minimun 4 characters")
    .required("Last Name is Required")
    .max(20, "Min 20 characters"),

  Email: yup.string().required("Email is Required"),

  password: yup
    .string()
    .required("Enter Password")
    .min(5, "Too Short")
    .max(20, "Too Long"),
});

const PersonalDetail: React.FC<any> = ({ submit, setFormValue, prevValue }) => {
  const forSubmit = (values: vlaues) => {
    submit(1);

    setFormValue({ ...values, ...prevValue });
  };
  let [passw, setPassw] = useState<boolean>(false);
  return (
    <Card style={{ width: "50%", padding: "25px", marginLeft: "20%" }}>
      <div>
        <Formik
          initialValues={prevValue}
          onSubmit={forSubmit}
          validationSchema={registerSchema}
        >
          {({ dirty, isValid }) => {
            return (
              <Form>
                <div>
                  <Field
                    name="FirstName"
                    color="primary"
                    as={TextField}
                    label="First Name"
                    fullWidth
                    helperText={<ErrorMessage name="FirstName" />}
                  />
                </div>
                <div>
                  <Field
                    name="LastName"
                    color="primary"
                    as={TextField}
                    label="Last Name"
                    fullWidth
                    helperText={<ErrorMessage name="LastName" />}
                  />
                </div>
                <div>
                  <Field
                    name="Email"
                    as={TextField}
                    type="email"
                    color="primary"
                    label="Email"
                    Placeholder="bilal@gmail.com"
                    fullWidth
                    helperText={<ErrorMessage name="Email" />}
                  />
                </div>
                <div>
                  <Field
                    name="password"
                    type={!passw ? "password" : "text"}
                    as={TextField}
                    color="primary"
                    label="password"
                    fullWidth
                    helperText={<ErrorMessage name="password" />}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={() => setPassw(true)}>
                          {passw ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>
                <Button
                  variant="outlined"
                  style={{ margin: "10px" }}
                  color="primary"
                  disabled={!dirty || !isValid}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Card>
  );
};

export default PersonalDetail;
