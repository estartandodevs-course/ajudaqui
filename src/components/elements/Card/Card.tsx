import * as S from './CardStyled';
import { ICardProps } from './interfaces';

export const Card = ({
  children,
  variant,
  day,
  as,
  src,
}: ICardProps) => (
  <S.ContainerCard variant={variant}>
    <S.IconCard src={src} />
    {day && <S.DaysCard>{day}</S.DaysCard>}
    <S.DescriptionCard
      as={as}
    >
      {children}
    </S.DescriptionCard>
  </S.ContainerCard>
);
