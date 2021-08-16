import React from "react";
import * as Yup from "yup";
import * as S from "./RegisterNewPasswordStyled";
import {
  Layout, Input, Form, Button,
} from "../../components";

export const RegisterNewPassword = () => {
  const validationForms = Yup.object().shape({
    password: Yup.string().required("Esse campo é requerido"),
    passwordConfirmation: Yup.string().oneOf([Yup.ref("password"), null], "As senhas devem ser iguais").required("Esse campo é requerido"),
  });
  return (
    <Layout>
      <S.TitlePage>Cadastro de nova senha</S.TitlePage>
      <S.ParagraphPage>
        Sua nova senha deve conter no mínimo 6 caracteres e apenas números.
      </S.ParagraphPage>

      <Form
        initialValues={{
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={validationForms}
        onSubmit={(values) => {
          validationForms(values);
        }}
      >
        <S.ContainerInput>
          <Input type="password" name="password" label="Sua nova senha" placeholder="" />
          <Input type="password" name="passwordConfirmation" label="Confirme sua nova senha" placeholder="" />
        </S.ContainerInput>
        <S.ContainerButton>
          <Button width="162px">ALTERAR SENHA</Button>
        </S.ContainerButton>
      </Form>
    </Layout>
  );
};
