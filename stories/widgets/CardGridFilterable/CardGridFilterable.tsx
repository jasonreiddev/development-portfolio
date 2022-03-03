import { useState } from 'react';

import { CardProps } from '../../components/Card/Card';
import { CardGrid } from '../../components/CardGrid/CardGrid';

import { CardGridFilterableStyles as s } from './CardGridFilterable.styles';

interface CardGridFilterableProps {
  cards: CardProps[];
}

interface tag {
  text: string;
  prevalence: number;
  active: boolean;
}

export const CardGridFilterable = ({ cards = [] }: CardGridFilterableProps): JSX.Element => {
  const tags: tag[] = [];

  cards.forEach((card) => {
    if (card.tags) {
      card.tags.forEach((tag) => {
        const match = tags.find((t) => t.text == tag);
        if (match == undefined || !tags.includes(match)) {
          tags.push({ text: tag, prevalence: 1, active: false });
        } else {
          match.prevalence++;
        }
      });
    }
  });

  tags.sort(function (a, b) {
    // by desc prevalence, asc length, asc alphabetically
    if (a.prevalence !== b.prevalence) {
      return b.prevalence - a.prevalence;
    }
    if (a.text.length !== b.text.length) {
      return a.text.length - b.text.length;
    }
    return a < b ? -1 : 1;
  });

  const [stateTags, setStateTags] = useState<tag[]>(tags);
  const [stateCards, setStateCards] = useState<CardProps[]>(cards);

  function tagClick(text: string): void {
    const match = stateTags.find((t) => t.text == text);
    if (match != undefined) {
      match.active = !match.active;
      setStateTags([...stateTags]);

      const active = stateTags.filter((t) => t.active).map((a) => a.text);
      if (active != undefined && active.length > 0) {
        const filteredCards = cards.filter((c) =>
          c.tags == undefined ? false : c.tags.some((tag) => active.includes(tag)),
        );
        setStateCards([...filteredCards]);
      } else {
        setStateCards([...cards]);
      }
    }
  }

  return (
    <s.Wrapper>
      <s.TagsContainer>
        {stateTags.map((tag, index) => (
          <s.Tag
            onClick={() => {
              tagClick(tag.text);
            }}
            key={`$all-tag${index}`}
            active={!!tag.active}
          >
            {tag.text}
          </s.Tag>
        ))}
      </s.TagsContainer>
      <CardGrid cards={stateCards} onTagClick={tagClick} />
    </s.Wrapper>
  );
};
