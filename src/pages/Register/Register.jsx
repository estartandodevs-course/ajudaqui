import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Layout, SelectProfileType } from "../../components";
import * as S from "./RegisterStyled";

export const Register = () => {
  const { setUser } = useAuth();

  const handleSelectProfileType = (values) => {
    setUser(values);
  };

  return (
    <Layout>
      <S.ContainerRegister>
        <S.ContentTitle>
          <S.TitleRegister>
            Vamos começar?
          </S.TitleRegister>
          <S.TitleRegister>
            É rápido e fácil!
          </S.TitleRegister>
        </S.ContentTitle>
        <S.ContentChoice>
          <S.ChoiceProfile>
            Escolha o seu perfil
          </S.ChoiceProfile>
        </S.ContentChoice>
        <SelectProfileType onChange={handleSelectProfileType} />
        <S.NextStep to="/register/step">
          Próximo
          <S.IconNext src="/assets/svg/next.svg" alt="next" />
        </S.NextStep>
      </S.ContainerRegister>
    </Layout>
  );
};
