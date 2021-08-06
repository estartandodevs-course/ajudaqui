
import "antd/dist/antd.css";
import * as S from "./style";

import { validationRegister } from "../validations";
import { Button, Form, Input } from "../../../components";


export const FormRegister = () => {
  return (
    <Form
      initialValues={{
        name: "",
        phone1: "",
        phone2: "",
        password1: "",
        password2: "",
        email1: "",
        email2: "",
      }}
      validationSchema={validationRegister}
    >
      <S.TabsRegister defaultActiveKey="1">
        <S.TabsChoiced tab="Cadastrar celular" key="1">
          <Input type="text" name="name" label="Nome completo" placeholder="Nome completo" />
          <Input type="tel" name="phone1" label="Seu número de celular" placeholder="(00) 0123-4567" />
          <Input type="tel" name="phone2" label="Confirme seu número de celular" placeholder="(00) 0123-4567" />
          <Input type="password" name="password1" label="Sua senha" placeholder="6 ou mais caracteres" />
          <Input type="password" name="password2" label="Confirme sua senha" placeholder="Digite a mesma senha de cima" />
          <div style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
          >
            <Button type="submit">CADASTRAR</Button>
          </div>
        </S.TabsChoiced>
        <S.TabsChoiced tab="Cadastrar e-mail" key="2">
          <Input type="text" name="name" label="Nome completo" placeholder="Nome completo" />
          <Input type="text" name="email1" label="Seu e-mail" placeholder="nome@example.com" />
          <Input type="text" name="email2" label="Confirme seu e-mail" placeholder="nome@example.com" />
          <Input type="password" name="password1" label="Sua senha" placeholder="6 ou mais caracteres" />
          <Input type="password" name="password2" label="Confirme sua senha" placeholder="Digite a mesma senha de cima" />
          <div style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
          >
            <Button type="submit">CADASTRAR</Button>
          </div>
        </S.TabsChoiced>
      </S.TabsRegister>
    </Form>
  );
};
