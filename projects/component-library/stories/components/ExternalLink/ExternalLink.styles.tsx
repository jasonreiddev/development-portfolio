import styled from 'styled-components';

import { ColorPair, useContrast } from '../../../../helpers/media';

interface ExternalLinkStylesProps {
  colorPair?: ColorPair;
}

export const Link = styled.a<ExternalLinkStylesProps>`
  white-space: nowrap;
  display: inline-flex;
  color: ${(p: ExternalLinkStylesProps) => useContrast(p.colorPair)};
  align-items: baseline;
  position: relative;

  svg {
    transform: translateY(2px);
    margin-right: 2px;
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: v ${(p: ExternalLinkStylesProps) => useContrast(p.colorPair)};
    @media (prefers-reduced-motion: no-preference) {
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }
    width: 0;
  }
  @media (pointer: fine) {
    &:hover :after {
      width: 100%;
      left: 0;
    }
  }
`;

export const ExternalLinkStyles = {
  Link,
};
