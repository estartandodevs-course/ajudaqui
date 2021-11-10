import * as yup from 'yup';

export const validationNewPassword = yup.object().shape({
  password: yup.string().required('Esse campo é requerido'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required('Esse campo é requerido'),
});
