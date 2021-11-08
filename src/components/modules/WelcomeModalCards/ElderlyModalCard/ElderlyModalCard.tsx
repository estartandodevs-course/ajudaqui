import { useScreen } from '../../../utils/hooks/useScreen';
import * as S from './ElderlyModalCardStyled';

export const ElderlyModalCard = ({ onClick }) => {
  const [widthScreen] = useScreen();
  const isDesktop = widthScreen >= 1200;
  return (
    <S.CardContainer isDesktop={isDesktop}>
      <S.Close src="/assets/svg/close.svg" alt="Close" onClick={onClick} />
      <S.Title>
        Bem vindo(a)!
      </S.Title>
      <S.LogoImage src="/assets/svg/Logo completa.svg" alt="Logo" />
      <S.Description>
        Antes de poder chamar por ajuda precisamos que você complete o seu
        <S.Span> Perfil</S.Span>
      </S.Description>
      <S.ArrowDown src="/assets/svg/icon seta apontando.svg" />
    </S.CardContainer>
  );
};
