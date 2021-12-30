import { ReactNode } from 'react';

export interface ICarousel {
  children?: ReactNode[],
  onNextEnd?: Function,
  autoPlaySpeed?: number,
  infinity?: boolean,
  showArrows?: boolean,
  enableAutoPlay?: boolean,
  pagination?: boolean,
  transitionMs?: number,
}
