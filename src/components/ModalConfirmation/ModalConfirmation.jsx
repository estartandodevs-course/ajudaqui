import * as S from "./ModalConfirmationStyled";
import { Button } from "../ButtonComponent";

export const ModalConfirmation = ({ backgroundCard, child, textColor }) => {
  return (
    <S.ContainerCard>
      <S.Card backgroundCard={backgroundCard}>
        <S.Text textColor={textColor}>
          {child}
        </S.Text>
        <S.PositionButton>
          <Button />
        </S.PositionButton>
      </S.Card>
    </S.ContainerCard>
  );
};
