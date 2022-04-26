import { EmblaCarousel } from '../../components/EmblaCarousel/EmblaCarousel';
import { CardCarouselStyles as s } from './CardCarousel.styles';
import { Card, CardProps } from '../../components/Card/Card';

export interface CardCarouselProps {
  cards: CardProps[];
}

export const CardCarousel = ({ cards = [] }: CardCarouselProps): JSX.Element => {
  const slides: JSX.Element[] = [];
  cards?.map((card: CardProps, index) => slides.push(<Card {...card} key={`Card${index}`} />));

  return (
    <s.Wrapper>
      <EmblaCarousel slides={slides} />
    </s.Wrapper>
  );
};
