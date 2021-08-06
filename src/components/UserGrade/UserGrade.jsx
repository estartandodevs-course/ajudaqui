import * as S from "./UserGrade.styled";
// import EstrelaAmarela from "";
// import EstrelaCinza from "";

export const UserGrade = ({ grade = 0 }) => {
  const starNumber = new Array(grade).fill(1);

  if (grade < 5) {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index <= 5; index++) {
      if (index > starNumber.length) {
        starNumber.push(0);
      }
    }
  }

  return (
    <div>
      {starNumber.map((item) => (
        item ? (
          <S.StarIcon
            alt="estrela amarela"
          />
        ) : (
          <S.StarIcon
            alt="estrela cinza"
          />
        )
      ))}
    </div>

  );
};
