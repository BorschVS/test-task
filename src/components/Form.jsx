import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FormStyled } from "styled/Form.styled";
import * as Yup from 'yup';

export const Form = () => {

    const formik = useFormik({
      initialValues: {
        name: '',
        email: ''
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required')
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      }
    });

    return (
      <FormStyled onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email Address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </FormStyled>
    );
  };