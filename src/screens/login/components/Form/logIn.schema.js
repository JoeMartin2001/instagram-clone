import * as yup from 'yup';

export const logInSchema = yup.object().shape({
  email: yup
    .string()
    .email('validemail')
    .max(255)
    .nullable(true)
    .required('required'),
  password: yup
    .string()
    .min(6, 'validpassword')
    .nullable(true)
    .required('required'),
});
