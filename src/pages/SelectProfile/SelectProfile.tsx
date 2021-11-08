import { useAuth } from '../../contexts';
import { useScreen } from '../../utils/hooks/useScreen';
import { Layout, SelectProfileType, SplashScreen } from '../../components';
import { AuthActionsTypes } from '../../contexts/Auth/types';
import * as S from './SelectProfileStyled';

export const SelectProfile = () => {
  const { dispatch } = useAuth();

  const handleSelectProfileType = (profileType) => {
    dispatch({
      type: AuthActionsTypes.PROFILE_TYPE,
      payload: { profileType },
    });
  };

  const [widthScreen] = useScreen();
  const showNavigation = widthScreen < 1200;

  return (
    <Layout hasArrow={false} showNavigation={showNavigation}>
      <S.ContainerSelectProfile>
        <S.SelectForm>
          <S.ContentTitle>
            <S.TitleRegister>Vamos começar?</S.TitleRegister>
            <S.TitleRegister>É rápido e fácil!</S.TitleRegister>
          </S.ContentTitle>
          <S.ContentChoice>
            <S.ChoiceProfile>Escolha o seu perfil</S.ChoiceProfile>
          </S.ContentChoice>
          <SelectProfileType onChange={handleSelectProfileType} />
          <S.NextStep to="/login">
            Próximo
            <S.IconNext src="/assets/svg/next.svg" alt="next" />
          </S.NextStep>
        </S.SelectForm>
        <S.SelectAside>
          <SplashScreen hasButton={false} />
        </S.SelectAside>
      </S.ContainerSelectProfile>
    </Layout>
  );
};
