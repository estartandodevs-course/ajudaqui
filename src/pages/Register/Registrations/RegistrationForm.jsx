import { FormRegister } from "../forms";
import { Layout } from "../../../components";
import * as S from "./RegistrationFormStyled";

export const RegistrationForm = () => {
  return (
    <Layout>
      <S.ContainerRegistrations>
        <S.ContentTitle>
          <S.TitleRegistrations>
            Faremos seu cadastro
          </S.TitleRegistrations>
          <S.DescriptionRegistrations>
            Escolha como deseja fazer seu cadastro
          </S.DescriptionRegistrations>
        </S.ContentTitle>
        <FormRegister />
      </S.ContainerRegistrations>
    </Layout>
  );
};
