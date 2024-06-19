import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .required('Please enter your email')
    .email('Please enter valid email address'),
  password: Yup.string().required('Please enter your password'),
});
