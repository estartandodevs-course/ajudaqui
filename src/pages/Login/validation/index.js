import * as yup from "yup";

export const validationLogin = yup.object().shape({
  // emailOrPhone: yup.string().when("isEmailValue", {
  //   is: "true",
  //   then: yup.string().email().required("Informe e-mail ou número de celular cadastrado"),
  //   otherwise: yup.string().min(13, "Telefone inválido").max(15, "Telefone inválido")
  //     .required("Informe e-mail ou número de celular cadastrado"),
  // }),
  password: yup.string().min(6, "É obrigatório ter no mínimo 6 caracteres!").required("Entre com uma senha"),
});
