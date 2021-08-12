import React from "react";
import { useAuth } from "../../contexts";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";
import { Layout, SelectProfileType, SplashScreen } from "../../components";
import * as S from "./RegisterStyled";

export const Register = () => {
  const { setProfileType } = useAuth();

  const handleSelectProfileType = (values) => {
    setProfileType(values);
  };

  const [widthScreen] = useWidthScreen();

  const showNavigation = widthScreen <= 1200;

  return (
    <Layout hasArrow={false} showNavigation={showNavigation}>
      <S.ContainerRegister>
        <S.RegisterForm>
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
          <S.NextStep to="/login">
            Próximo
            <S.IconNext src="/assets/svg/next.svg" alt="next" />
          </S.NextStep>
        </S.RegisterForm>
        <S.RegisterAside>
          <SplashScreen hasButton={false} />
        </S.RegisterAside>
      </S.ContainerRegister>
    </Layout>
  );
};
