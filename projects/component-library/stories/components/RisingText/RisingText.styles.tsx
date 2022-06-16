import styled from 'styled-components';

import { ColorPair, useContrast } from '../../../../helpers/media';

interface RisingTextStylesProps {
  colorPair?: ColorPair;
}

const Wrapper = styled.span`
  display: grid;
  grid-template-areas: 'text';
`;

const Text = styled.span`
  grid-area: text;
  @media (prefers-reduced-motion: no-preference) {
    transition: clip-path 1s;
  }
  clip-path: polygon(0% 0%, 100% 0%, 100% 110%, 0% 110%);
  ${Wrapper}:hover & {
    @media (prefers-reduced-motion: no-preference) {
      transition: clip-path 0.3s;
    }
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  }
`;

const RisingText = styled(Text)<RisingTextStylesProps>`
  color: ${(p: RisingTextStylesProps) => useContrast(p.colorPair)};
  clip-path: polygon(0% 110%, 100% 110%, 100% 110%, 0% 110%);
  ${Wrapper}:hover & {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 110%);
  }
`;

export const RisingTextStyles = {
  Wrapper,
  Text,
  RisingText,
};
