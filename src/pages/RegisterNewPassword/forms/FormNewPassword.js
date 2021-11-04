import * as S from '../RegisterNewPasswordStyled';
import { validationNewPassword } from '../validations';
import {
  Input, Form, Button,
} from '../../../components';

export const FormNewPassword = () => (
  <Form
    initialValues={{
      password: '',
      passwordConfirmation: '',
    }}
    validationSchema={validationNewPassword}
  >
    <S.ContainerInput>
      <Input type="password" name="password" label="Sua nova senha" placeholder="" />
      <Input type="password" name="passwordConfirmation" label="Confirme sua nova senha" placeholder="" />
    </S.ContainerInput>
    <S.ContainerButton>
      <Button width="162px">ALTERAR SENHA</Button>
    </S.ContainerButton>
  </Form>
);
