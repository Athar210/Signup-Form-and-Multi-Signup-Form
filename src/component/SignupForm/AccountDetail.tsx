import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { Card, Button } from "@material-ui/core";

interface vlaues {
  FullName: string;
  Phone: string;
  Address: string;
  country: string;
  city: string;
  gender: string;
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registerSchema = yup.object({
  FullName: yup
    .string()
    .max(25, "Max 25 characters")
    .required("Please Enter Full Name")
    .min(4, "Minimun 6 characters"),
  Phone: yup
    .string()
    .matches(phoneRegExp, "Invalid Phone")
    .required("Phone is Required"),
  Address: yup.string().required("Address Required"),
  country: yup.string().required("Country Name Required"),
  city: yup.string().required("City Name Required"),
});

const AccountDetail: React.FC<any> = ({ submit, setFormValue, prevValue }) => {
  const forSubmit = (values: vlaues) => {
    submit(2);

    setFormValue({ ...values, ...prevValue });
  };

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
                    name="FullName"
                    color="primary"
                    as={TextField}
                    label="Full Name"
                    fullWidth
                    helperText={<ErrorMessage name="FullName" />}
                  />
                </div>
                <div>
                  <Field
                    name="Phone"
                    color="primary"
                    as={TextField}
                    label="Phone Number"
                    placeholder="+923******"
                    type="number"
                    fullWidth
                    helperText={<ErrorMessage name="Phone" />}
                  />
                </div>
                <div>
                  <Field
                    color="primary"
                    name="Address"
                    as={TextField}
                    label="Address"
                    fullWidth
                    helperText={<ErrorMessage name="Address" />}
                  />
                </div>
                <div>
                  <Field
                    color="primary"
                    name="country"
                    as={TextField}
                    label="Country"
                    fullWidth
                    helperText={<ErrorMessage name="country" />}
                  />
                </div>
                <div>
                  <Field
                    color="primary"
                    name="city"
                    as={TextField}
                    label="City"
                    fullWidth
                    helperText={<ErrorMessage name="city" />}
                  />
                </div>
                <div
                  style={{
                    paddingTop: "25px",
                    paddingBottom: "25px",
                    display: "flex",
                    justifyContent: "start",
                  }}
                >
                  <label style={{ color: "#2B86C5" }}>Gender </label>
                  <label>
                    <Field type="radio" name="picked" value="Female" />
                    Female
                  </label>
                  <label>
                    <Field type="radio" name="picked" value="Male" />
                    Male
                  </label>
                </div>

                <Button
                  variant="outlined"
                  style={{ margin: "10px" }}
                  color="primary"
                  onClick={() => submit(0)}
                >
                  Back
                </Button>
                <Button
                  variant="outlined"
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

export default AccountDetail;
