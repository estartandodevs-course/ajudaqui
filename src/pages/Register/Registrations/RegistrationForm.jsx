import { useHistory } from "react-router-dom";
import { FormRegister } from "../forms";
import { Layout } from "../../../components";
import * as S from "./RegistrationFormStyled";

export const RegistrationForm = () => {
  const { goBack } = useHistory();
  return (
    <Layout>
      <S.ContainerRegistrations>
        <S.ContentBack>
          <S.Back src="/assets/svg/back.svg" alt="back" onClick={() => goBack()} />
        </S.ContentBack>
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
