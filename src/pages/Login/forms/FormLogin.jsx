import { useState } from "react";
import { Input, Form } from "../../../components";
import { validationLogin } from "../validation";

export const FormLogin = () => {
  const [isEmail, setIsEmail] = useState(false);
  const onChangeEmailPhone = (e) => {
    const email = e.target.value.includes("@");
    if (email) {
      setIsEmail(true);
    } else (setIsEmail(false));
  };
  return (
    <Form
      initialValues={{
        emailOrPhone: "",
        password: "",
      }}
      validationSchema={validationLogin}
    >
      <Input type="text" name="emailOrPhone" label="E-mail ou número do celular" onChange={onChangeEmailPhone} />
      <Input type="hidden" name="isEmailValue" value={isEmail} />
      <Input type="password" name="password" label="Senha" />
    </Form>
  );
};
