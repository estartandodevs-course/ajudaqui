import * as S from "./CarouselStyled";

export const Carousel = ({ children, ...restProps }) => {
  return (
    <S.ContainerCarousel {...restProps}>
      {children}
    </S.ContainerCarousel>
  );
};
