import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const theme = useTheme();

  // Form validation schema
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("First name is required")
      .matches(/^[A-Za-z]+$/, "No spaces or special characters allowed"),
    lastname: Yup.string()
      .required("Last name is required")
      .matches(/^[A-Za-z]+$/, "No spaces or special characters allowed"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone_number: Yup.string()
      .matches(/^[0-9]+$/, "Must be a number")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    message: "",
  };

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    console.log("Form values:", values);
    alert("Form submitted successfully!");
    resetForm();
  };

  return (
    <Box
      sx={{ py: "48px", backgroundColor: theme.palette.custom.black }}
      id="contact"
    >
      <Container>
        <Typography
          variant="h3"
          fontWeight={600}
          sx={{
            color: theme.palette.custom.white,
            textAlign: "center",
            pb: "24px",
          }}
        >
          Contact{" "}
          <span style={{ color: theme.palette.custom.orange }}>Form</span>
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid size={{ md: 6, xs: 12 }}>
                  <TextField
                    fullWidth
                    id="firstname"
                    name="firstname"
                    placeholder={
                      touched.firstname && errors.firstname
                        ? errors.firstname
                        : " First Name"
                    }
                    value={values.firstname}
                    onChange={handleChange}
                    error={touched.firstname && Boolean(errors.firstname)}
                    sx={{
                      backgroundColor: theme.palette.custom.white,
                      borderRadius: 1,
                      "& input::placeholder": {
                        color:
                          touched.firstname && errors.firstname
                            ? "red"
                            : theme.palette.custom.black,
                      },
                    }}
                    InputLabelProps={{ shrink: false }}
                    label="" // no floating label
                  />
                </Grid>
                <Grid size={{ md: 6, xs: 12 }}>
                  <TextField
                    fullWidth
                    id="lastname"
                    name="lastname"
                    placeholder={
                      touched.lastname && errors.lastname
                        ? errors.lastname
                        : " Last Name"
                    }
                    value={values.lastname}
                    onChange={handleChange}
                    error={touched.lastname && Boolean(errors.lastname)}
                    sx={{
                      backgroundColor: theme.palette.custom.white,
                      borderRadius: 1,
                      "& input::placeholder": {
                        color:
                          touched.lastname && errors.lastname
                            ? "red"
                            : theme.palette.custom.black,
                      },
                    }}
                    InputLabelProps={{ shrink: false }}
                    label="" // no floating label
                  />
                </Grid>
                <Grid size={{ md: 6, xs: 12 }}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    placeholder={
                      touched.email && errors.email ? errors.email : " Email"
                    }
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    sx={{
                      backgroundColor: theme.palette.custom.white,
                      borderRadius: 1,
                      "& input::placeholder": {
                        color:
                          touched.email && errors.email
                            ? "red"
                            : theme.palette.custom.black,
                      },
                    }}
                    InputLabelProps={{ shrink: false }}
                    label="" // no floating label
                  />
                </Grid>
                <Grid size={{ md: 6, xs: 12 }}>
                  <TextField
                    fullWidth
                    id="phone_number"
                    name="phone_number"
                    placeholder={
                      touched.phone_number && errors.phone_number
                        ? errors.phone_number
                        : "Phone Number"
                    }
                    value={values.phone_number}
                    onChange={handleChange}
                    error={touched.phone_number && Boolean(errors.phone_number)}
                    sx={{
                      backgroundColor: theme.palette.custom.white,
                      borderRadius: 1,
                      "& input::placeholder": {
                        color:
                          touched.phone_number && errors.phone_number
                            ? "red"
                            : theme.palette.custom.black,
                      },
                    }}
                    InputLabelProps={{ shrink: false }}
                    label="" // no floating label
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={6}
                    id="message"
                    name="message"
                    placeholder={
                      touched.message && errors.message
                        ? errors.message
                        : "Message"
                    }
                    value={values.message}
                    onChange={handleChange}
                    error={touched.message && Boolean(errors.message)}
                    sx={{
                      backgroundColor: theme.palette.custom.white,
                      borderRadius: 1,
                      "& textarea::placeholder": {
                        color:
                          touched.message && errors.message
                            ? "red"
                            : theme.palette.custom.black,
                      },
                    }}
                    InputLabelProps={{ shrink: false }}
                    label="" // no floating label
                  />
                </Grid>
                <Grid size={{ xs: 12 }} textAlign="center">
                  <Button
                    type="submit"
                    variant="cream"
                    sx={{
                      fontWeight: 700,
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default Contact;
