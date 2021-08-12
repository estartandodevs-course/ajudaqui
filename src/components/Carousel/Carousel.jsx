import * as S from "./CarouselStyled";

export const Carousel = ({
  height, display, margin, children, ...restProps
}) => {
  return (
    <S.ContainerCarousel height={height} margin={margin} display={display} {...restProps}>
      {children}
    </S.ContainerCarousel>
  );
};
