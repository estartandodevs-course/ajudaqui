import { useRef } from "react";
import * as S from "./CarouselStyled";

export const Carousel = ({
  height,
  display,
  margin,
  children,
  onNextEnd,
  infinity,
  autoPlaySpeed,
  ...restProps
}) => {
  let resetTimeout;
  const carouselRef = useRef(null);

  const handleInfinity = ({ index }, reference) => {
    clearTimeout(resetTimeout);
    if (index + 1 === children?.length) {
      resetTimeout = setTimeout(() => {
        reference.current.goTo(0);
      }, autoPlaySpeed);
    }
  };

  return (
    <S.ContainerCarousel
      ref={carouselRef}
      height={height}
      margin={margin}
      display={display}
      autoPlaySpeed={autoPlaySpeed}
      onNextEnd={(nextItem, index) => {
        if (onNextEnd) {
          onNextEnd(nextItem, index);
        }
        if (infinity) {
          handleInfinity(nextItem, carouselRef);
        }
      }}
      {...restProps}
    >
      {children}
    </S.ContainerCarousel>
  );
};
