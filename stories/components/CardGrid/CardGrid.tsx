import { FunctionComponent } from 'react';

import { CardGridStyles as s } from './CardGrid.styles';
import { Card, CardProps } from '../Card/Card';

export interface CardGridProps {
  cards: CardProps[];
  onTagClick: (text: string) => void;
}

export const CardGrid: FunctionComponent<CardGridProps> = ({ cards, onTagClick }) => {
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
              onTagClick={onTagClick}
            />
          );
        })}
    </s.Container>
  );
};
