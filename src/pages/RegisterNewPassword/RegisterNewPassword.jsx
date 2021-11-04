import * as S from './RegisterNewPasswordStyled';
import { FormNewPassword } from './forms';
import {
  Layout,
} from '../../components';

export const RegisterNewPassword = () => (
  <Layout>
    <S.TitlePage>Cadastro de nova senha</S.TitlePage>
    <S.ParagraphPage>
      Sua nova senha deve conter no mínimo 6 caracteres e apenas números.
    </S.ParagraphPage>
    <FormNewPassword />
  </Layout>
);
