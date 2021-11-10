import { useEffect, useRef } from 'react';
import * as S from './CarouselStyled';

export const Carousel = ({
  children,
  onNextEnd,
  infinity,
  autoPlaySpeed,
  ...restProps
}) => {
  let resetTimeout: any;
  const carouselRef = useRef(null);

  const handleInfinity = ({ index }, reference: any): void => {
    clearTimeout(resetTimeout);
    if (index + 1 === children?.length) {
      resetTimeout = setTimeout(() => {
        reference?.current?.goTo(0);
      }, autoPlaySpeed);
    }
  };

  useEffect(() => clearTimeout(resetTimeout), []);

  return (
    <S.ContainerCarousel
      isRTL
      ref={carouselRef}
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
