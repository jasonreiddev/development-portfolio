import styled from 'styled-components';

import { ColorPair, useColorPair } from 'helpers/media';

interface TextCardStylesProps {
  fitContent?: boolean;
  colorPair?: ColorPair;
}

const Wrapper = styled.div<TextCardStylesProps>`
  margin: var(--spacing);
  padding: 20px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  ${(p: TextCardStylesProps) => (p.fitContent ? `width: fit-content;` : null)};

  ${(p: TextCardStylesProps) => useColorPair(p.colorPair, '10pt')}
`;

const Title = styled.h1<TextCardStylesProps>`
  font-weight: 900;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
`;

export const TextCardStyles = {
  Wrapper,
  Title,
};
