import * as yup from "yup";
import { phoneRegExp } from "../../../utils/constants/regex";

export const validationRegister = yup.object().shape({
  name: yup.string().required("Necessário informar nome completo"),
  phone1: yup.string()
    .required("Necessário informar número de celular")
    .matches(phoneRegExp, "Esse celular não é valido!"),
  phone2: yup.string().oneOf([yup.ref("phone1"), null], "Entre com o mesmo número de celular"),
  password1: yup.string().min(6, "É obrigatório ter no mínimo 6 caracteres!").required("Entre com uma senha"),
  password2: yup.string().min(6, "É obrigatório ter no mínimo 6 caracteres!").oneOf([yup.ref("password1"), null], "Entre com a mesma senha"),
  email1: yup.string().email().required("Necessário informar e-mail"),

});
