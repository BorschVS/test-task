import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button, TextField } from '@mui/material';

import { useModal } from 'hooks/useModal';

import { setFormData } from '../redux/ducks/form';
import { AppDispatch } from 'redux/configureStore';

import { FormStyled } from 'styled/Form.styled';

const Form = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { toggleModal } = useModal();

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Введите имя'),
      phone: Yup.number().required('Введите номер'),
      email: Yup.string()
        .email('Введите корректный email')
        .required('Введите email'),
    }),
    onSubmit: (values) => {
      dispatch(setFormData(JSON.stringify(values)));
      toggleModal();
    },
  });

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        margin="dense"
        id="name"
        name="name"
        label="Имя и фамилия"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        fullWidth
        margin="dense"
        id="phone"
        name="phone"
        label="Телефон"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.errors.phone && 'Введите номер'}
      />
      <TextField
        fullWidth
        margin="dense"
        id="email"
        name="email"
        label="Почта"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <Button
        sx={{ marginTop: 2 }}
        color="info"
        variant="contained"
        fullWidth
        type="submit"
      >
        Отправить
      </Button>
    </FormStyled>
  );
};

export default Form;
