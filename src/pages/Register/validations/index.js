import * as yup from "yup";

export const validationRegisterWithPhone = yup.object().shape({
  name: yup.string().required("Necessário informar nome completo"),
  phone1: yup.string()
    .min(13, "Telefone inválido")
    .max(15, "Telefone inválido")
    .required("Telefone é obrigatório"),
  phone2: yup.string().oneOf([yup.ref("phone1"), null], "Entre com o mesmo número de celular"),
  password1: yup.string().min(6, "É obrigatório ter no mínimo 6 caracteres!").required("Entre com uma senha"),
  password2: yup.string().min(6, "É obrigatório ter no mínimo 6 caracteres!").oneOf([yup.ref("password1"), null], "Entre com a mesma senha"),
});

export const validationRegisterWithEmail = yup.object().shape({
  name: yup.string().required("Necessário informar nome completo"),
  email1: yup.string().email().required("Necessário informar e-mail"),
  email2: yup.string().email().oneOf([yup.ref("email1"), null], "Entre com o mesmo email!"),
  password1: yup.string().min(6, "É obrigatório ter no mínimo 6 caracteres!").required("Entre com uma senha"),
  password2: yup.string().min(6, "É obrigatório ter no mínimo 6 caracteres!").oneOf([yup.ref("password1"), null], "Entre com a mesma senha"),
});
