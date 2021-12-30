import { IModalConfirmationProps } from './interfaces';
import * as S from './ModalConfirmationStyled';

export const ModalConfirmation = ({
  children, component,
}: IModalConfirmationProps) => (
  <S.ContainerCard>
    <S.Card>
      <S.Text>
        {children}
      </S.Text>
      {component}
    </S.Card>
  </S.ContainerCard>
);
