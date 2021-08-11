import { useHistory } from "react-router-dom";
import * as S from "./BackNavigationStyled";

export const BackNavigation = () => {
  const { goBack } = useHistory();
  return (
    <S.Container>
      <S.ImageTop src="/assets/svg/detalhe topo tela.svg" />
      <S.Back src="/assets/svg/back.svg" onClick={() => goBack()} />
    </S.Container>
  );
};
