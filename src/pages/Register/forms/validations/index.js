import * as yup from "yup";

export const validationRegister = yup.object().shape({
  name: yup.string().required("Esse item é requerido"),
  password: yup.string().min(6, "A senha deve possuir no mínimo 6 caracteres").required("Esse item é requerido"),
});
