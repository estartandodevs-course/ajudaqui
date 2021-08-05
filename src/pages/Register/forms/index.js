import { Form, Input } from "../../../components";
import { validationRegister } from "./validations";

export const FormRegister = () => {
  return (
    <Form
      initialValues={{
        name: "", password: "",
      }}
      validationSchema={validationRegister}
    >
      <Input type="text" name="name" label="Nome completo" placeholder="Nome completo" />
      <Input type="password" name="password" label="Seu número de celular" placeholder="(00) 0123-4567" />
    </Form>
  );
};
