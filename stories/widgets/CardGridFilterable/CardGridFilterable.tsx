import { CardProps } from '../../components/Card/Card';
import CardGrid from '../../components/CardGrid/CardGrid';

import { CardGridFilterableStyles as s } from './CardGridFilterable.styles';

interface CardGridFilterableProps {
  cards: CardProps[];
}

export const CardGridFilterable = ({ cards }: CardGridFilterableProps): JSX.Element => {
  const tags: string[] = [];
  cards.forEach((card) => {
    if (card.tags) {
      card.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    }
  });

  tags.sort(function (a, b) {
    // by length then alphabetically
    if (a.length == b.length) {
      return a < b ? -1 : 1;
    }
    return a.length - b.length;
  });

  return (
    <s.Wrapper>
      <s.TagsContainer>
        {tags.map((tag, index) => (
          <s.Tag key={`$all-tag${index}`}>{tag}</s.Tag>
        ))}
      </s.TagsContainer>
      <CardGrid cards={cards} />
    </s.Wrapper>
  );
};
