import { CardTimelineStyles as s } from './CardTimeline.styles';
import { Card, CardProps } from '../Card/Card';

export interface CardTimelineProps {
  cards: CardProps[];
  size?: number;
}

export const CardTimeline = ({ cards, size = 200 }: CardTimelineProps): JSX.Element => {
  return (
    <s.Container size={size}>
      {cards &&
        cards.map((card, index) => {
          return <Card {...card} modifyWidth={1} key={`Card${index}`} />;
        })}
      <s.Line size={size} />
    </s.Container>
  );
};
