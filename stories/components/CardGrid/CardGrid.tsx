import { FunctionComponent } from 'react';

import { CardGridStyles as s } from './CardGrid.styles';
import { Card, CardProps } from '../Card/Card';

export interface CardGridProps {
  cards: CardProps[];
}

export const CardGrid: FunctionComponent<CardGridProps> = ({ cards }) => {
  return (
    <s.Container size={200}>
      {cards &&
        cards.map((card, index) => {
          return (
            <Card
              key={`Card${index}`}
              url={card.url}
              title={card.title}
              image={card.image}
              alt={card.alt}
              text={card.text}
              tags={card.tags}
              doubleWidth={card.doubleWidth}
            />
          );
        })}
    </s.Container>
  );
};

export default CardGrid;
