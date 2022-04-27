import { EmblaCarousel } from '../../components/EmblaCarousel/EmblaCarousel';
import { CardCarouselStyles as s } from './CardCarousel.styles';
import { Card, CardProps } from '../../components/Card/Card';
import React, { useEffect, useState } from 'react';

export interface CardCarouselProps {
  cards: CardProps[];
}

export const CardCarousel = ({ cards = [] }: CardCarouselProps): JSX.Element => {
  const [displaying, setDisplaying] = useState(1);
  const [size, setSize] = useState(300);

  const slides: JSX.Element[] = [];
  cards?.map((card: CardProps, index) => slides.push(<Card {...card} key={`Card${index}`} />));

  const wrapperRef = React.createRef<HTMLInputElement>();

  const calculateSizes = (): void => {
    if (wrapperRef && wrapperRef.current) {
      // repeat(auto-fit,minmax(size,1fr))
      // get size, divide by 300px | round down, get %
      // e.g. 700px / 300px =  233px  | 2 | 100 / 2 = 50%
      const newDisplaying = Math.floor(wrapperRef.current.offsetWidth / 300);
      const newSize = 100 / newDisplaying;
      if (newDisplaying !== displaying || newSize !== size) {
        setDisplaying(newDisplaying);
        setSize(newSize);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', calculateSizes);
    calculateSizes();
  }, [wrapperRef]);

  return (
    <s.Wrapper ref={wrapperRef}>
      <EmblaCarousel
        slides={slides}
        emblaOptions={{ align: 'start', containScroll: 'keepSnaps' }}
        displaying={displaying}
        size={size}
      />
    </s.Wrapper>
  );
};
