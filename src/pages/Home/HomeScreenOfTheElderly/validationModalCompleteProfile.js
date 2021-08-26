import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required(),
  phoneNumber: yup.string().required(),
  gender: yup.string().required(),
  birthday: yup.string().required(),
  location: yup.object().shape({
    address: yup.string().required(),
    city: yup.string().required(),
    uf: yup.string().required(),
  }),
  health: yup.object().shape({
    medicine: yup.string().required(),
    specialConditions: yup.string().required(),
  }),
});
