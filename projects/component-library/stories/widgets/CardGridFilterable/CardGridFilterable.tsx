import { useState } from 'react';
import { Device } from 'helpers/media';
import { Accordion } from '../../components/Accordion/Accordion';

import { CardProps } from '../../components/Card/Card';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import { IfWidth } from '../../components/IfWidth/IfWidth';

import { CardGridFilterableStyles as s } from './CardGridFilterable.styles';
import { ColorPair } from 'helpers/media';

export interface CardGridFilterableProps {
  cards: CardProps[];
  size?: number;
}

interface tag {
  text: string;
  prevalence: number;
  active: boolean;
}

export const CardGridFilterable = ({ cards = [], size }: CardGridFilterableProps): JSX.Element => {
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

  const TagContainer = (): JSX.Element => {
    return (
      <s.TagsContainer>
        {stateTags.map((tag, index) => (
          <s.Tag
            key={`$all-tag${index}`}
            active={!!tag.active}
            colorPair={tag.active ? ColorPair.Primary : ColorPair.PrimaryInactive}
            onClick={() => {
              tagClick(tag.text);
            }}
          >
            {tag.text}
          </s.Tag>
        ))}
      </s.TagsContainer>
    );
  };

  // Up to minWidth Mobile - Wrap Tags in accordion
  const FalseChildren = (): JSX.Element => {
    return <Accordion title="Tags">{TagContainer()}</Accordion>;
  };

  return (
    <s.Wrapper>
      <IfWidth falseChildren={FalseChildren()} minWidth={Device.Tablet}>
        {TagContainer()}
      </IfWidth>
      <CardGrid cards={stateCards} size={size} onTagClick={tagClick} />
    </s.Wrapper>
  );
};
