import { useHistory } from "react-router-dom";
import { ArrowBack, Layout } from "../../../components";
import { RegisterWithEmail, RegisterWithPhone } from "../forms";
import "antd/dist/antd.css";
import * as S from "./RegistrationFormStyled";

export const RegistrationForm = ({ ...restProps }) => {
  const { goBack } = useHistory();
  return (
    <Layout>
      <S.ContainerRegistrations {...restProps}>
        <ArrowBack onClick={() => goBack()} />
        <S.ContentTitle>
          <S.TitleRegistrations>
            Faremos seu cadastro
          </S.TitleRegistrations>
          <S.DescriptionRegistrations>
            Escolha como deseja fazer seu cadastro
          </S.DescriptionRegistrations>
          <S.TabsRegister defaultActiveKey="1">
            <S.TabsChoiced tab="Cadastrar celular" key="1">
              <RegisterWithPhone />
            </S.TabsChoiced>
            <S.TabsChoiced tab="Cadastrar e-mail" key="2">
              <RegisterWithEmail />
            </S.TabsChoiced>
          </S.TabsRegister>
        </S.ContentTitle>
      </S.ContainerRegistrations>
    </Layout>
  );
};
