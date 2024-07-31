import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';

import { setFormData } from '../redux/modules/form/actions';

import { FormStyled } from 'styled/Form.styled';
import { useModal } from 'hooks/useModal';

export const Form = () => {
  const dispatch = useDispatch();

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
        .email('Введите правильный email')
        .required('Введите email'),
    }),
    onSubmit: (values) => {
      dispatch(setFormData(JSON.stringify(values, null, 2)));
      dispatch(toggleModal());
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
