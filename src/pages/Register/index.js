import React from "react";
import { Layout, SelectProfileType } from "../../components";
import * as S from "./style";

export const Register = () => {
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
        <SelectProfileType />
        <S.NextStep>
          Próximo
          <S.IconNext src="/assets/svg/next.svg" alt="next" />
        </S.NextStep>
      </S.ContainerRegister>
    </Layout>
  );
};
