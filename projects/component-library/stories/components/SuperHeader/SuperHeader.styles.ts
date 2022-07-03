import styled from 'styled-components';

import { ColorPair, useColorPair, useContrast, useContrastDecreaseContrast } from 'helpers/media';

interface SuperHeaderStylesProps {
  colorPair?: ColorPair;
}

const SuperHeader = styled.header<SuperHeaderStylesProps>`
  padding: 0.75em var(--spacing);
  display: flex;
  font-weight: bold;
  ${(p: SuperHeaderStylesProps) => useColorPair(p.colorPair, '14pt')}

  div {
    margin-left: auto;
  }
`;

const Title = styled.a`
  color: ${(p: SuperHeaderStylesProps) => useContrast(p.colorPair)};
  text-decoration: none;
`;

const SubTitle = styled.span<SuperHeaderStylesProps>`
  color: ${(p: SuperHeaderStylesProps) => useContrastDecreaseContrast(p.colorPair)};
`;

export const SuperHeaderStyles = {
  SuperHeader,
  Title,
  SubTitle,
};
