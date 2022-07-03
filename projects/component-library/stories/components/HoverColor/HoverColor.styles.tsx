import styled from 'styled-components';

import { ColorPair, useBase } from 'helpers/media';

interface HoverColorStylesProps {
  colorPair?: ColorPair;
}

const Highlight = styled.span`
  display: block;
  width: fit-content;
  background-size: 200% 100%;
  @media (prefers-reduced-motion: no-preference) {
    transition: background-position 1s, color 0.5s;
  }
`;

const Wrapper = styled.span<HoverColorStylesProps>`
  display: inline-flex;
  align-items: center;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${Highlight} {
        background-position: -100% 0;
        background-image: linear-gradient(
          to right,
          transparent 50%,
          ${(p: HoverColorStylesProps) => useBase(p.colorPair)} 50%
        );
        background-position: -100% 0;
      }
    }
  }
`;

export const HoverColorStyles = {
  Wrapper,
  Highlight,
};
