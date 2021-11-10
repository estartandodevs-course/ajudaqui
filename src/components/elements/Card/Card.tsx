import * as S from './CardStyled';
import { ICardProps } from './interfaces';

export const Card = ({
  children,
  day,
  as,
}: ICardProps) => (
  <S.ContainerCard>
    <S.IconCard />
    {day && <S.DaysCard>{day}</S.DaysCard>}
    <S.DescriptionCard
      as={as}
    >
      {children}
    </S.DescriptionCard>
  </S.ContainerCard>
);
