import * as yup from "yup";


export const validationPersonalInformation = yup.object().shape({
  name: yup.string(),
  birthday: yup.date(),
  gender: yup.string(),
  address: yup.string(),
  phone: yup.string().min(13, "Telefone inválido")
    .max(15, "Telefone inválido"),
});
