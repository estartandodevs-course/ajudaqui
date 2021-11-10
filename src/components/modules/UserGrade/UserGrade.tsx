import { v4 as uuid } from 'uuid';
import * as S from './UserGradeStyled';

export const UserGrade = ({ grade = 0 }) => {
  const starNumber: number[] = new Array(grade).fill(1);

  if (grade < 5) {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index <= 5; index++) {
      if (index > starNumber.length) {
        starNumber.push(0);
      }
    }
  }

  return (
    <S.ContainerStar>
      {starNumber.map((item) => (
        item ? (
          <S.StarIcon
            key={uuid()}
            alt="estrela amarela"
            src="/assets/svg/estrela-preenchida.svg"
          />
        ) : (
          <S.StarIcon
            key={uuid()}
            alt="estrela cinza"
            src="/assets/svg/estrela-vazia.svg"
          />
        )
      ))}
    </S.ContainerStar>

  );
};
