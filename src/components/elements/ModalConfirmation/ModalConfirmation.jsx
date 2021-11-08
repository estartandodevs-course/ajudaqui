import * as S from './ModalConfirmationStyled';
import { Button } from '../Button';

export const ModalConfirmation = ({
  backgroundCard,
  child,
  textColor,
  ...restProps
}) => (
  <S.ContainerCard>
    <S.Card backgroundCard={backgroundCard}>
      <S.Text textColor={textColor}>
        {child}
      </S.Text>
      <S.PositionButton>
        <Button {...restProps} />
      </S.PositionButton>
    </S.Card>
  </S.ContainerCard>
);
