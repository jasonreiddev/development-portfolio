import styled from 'styled-components';

import { ColorPair, useColorPair } from '../../../../helpers/media';

interface FrequentlyAskedQuestionStylesProps {
  active?: boolean;
  colorPair?: ColorPair;
}

const Wrapper = styled.details`
  font-size: 1rem;
  color: hsl(0deg 0% 25%);
  margin: 32px;

  border-radius: 0 0 var(--border-radius) var(--border-radius);
  box-shadow: var(--box-shadow);
  font-style: italic;
`;

const Question = styled.summary<FrequentlyAskedQuestionStylesProps>`
  ${(p: FrequentlyAskedQuestionStylesProps) => useColorPair(p.colorPair, '10pt')}
  cursor: pointer;
  padding: 12px 16px;
  outline-offset: 5px;
  box-shadow: var(--box-shadow);
`;

const Answer = styled.div<FrequentlyAskedQuestionStylesProps>`
  ${(p: FrequentlyAskedQuestionStylesProps) => useColorPair(p.colorPair, '10pt')}
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  padding: 12px 17px;
  font-style: italic;
`;

export const FrequentlyAskedQuestionStyles = {
  Wrapper,
  Question,
  Answer,
};
