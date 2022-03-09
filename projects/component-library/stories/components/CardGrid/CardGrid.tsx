import { CardGridStyles as s } from './CardGrid.styles';
import { Card, CardProps } from '../Card/Card';

export interface CardGridProps {
  cards: CardProps[];
  onTagClick: (text: string) => void;
  size?: number;
}

export const CardGrid = ({ cards, onTagClick, size = 200 }: CardGridProps): JSX.Element => {
  cards.sort(function (a, b) {
    // by desc modify width
    a.modifyWidth = typeof b.modifyWidth == undefined ? 1 : a.modifyWidth;
    b.modifyWidth = typeof a.modifyWidth == undefined ? 1 : b.modifyWidth;

    if (typeof a.modifyWidth == 'number' && typeof b.modifyWidth == 'number') {
      return b.modifyWidth - a.modifyWidth;
    }

    if (a.modifyWidth == 'full') {
      return -1;
    }
    return 1;
  });

  return (
    <s.Container size={size}>
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
              modifyWidth={card.modifyWidth}
              onTagClick={onTagClick}
            />
          );
        })}
    </s.Container>
  );
};
