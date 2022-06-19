import styled from 'styled-components';

import { ColorPair, useColorPair } from '../../../../helpers/media';

interface IconButtonStylesProps {
  backgroundColor?: string;
  flipIconY?: boolean;
  active?: boolean;
  align?: string;
  size?: 'small' | 'medium' | 'large';
  colorPair?: ColorPair;
}

const Button = styled.button<IconButtonStylesProps>`
  aspect-ratio: 1/1;
  border: 0;
  background: var(--color-base);
  border-radius: var(--border-radius);

  cursor: pointer;
  box-shadow: var(--box-shadow);
  backface-visibility: hidden;

  ${(p: IconButtonStylesProps) => useColorPair(p.colorPair, '10pt')}

  &:hover {
    transform: scale(0.95);
    box-shadow: none;
  }

  ${(p: IconButtonStylesProps) => {
    switch (p.size) {
      case 'small': {
        return `
        font-size: 12px;
        padding: 0;`;
      }
      case 'medium': {
        return `
        font-size: 14px;
        padding: 10px 16px;`;
      }
      case 'large': {
        return `
        font-size: 16px;
        padding: 15px 24px;`;
      }
    }
  }};
`;

const Wrapper = styled.div`
  line-height: 1;
  width: fit-content;

  ${(p: IconButtonStylesProps) =>
    p.align == 'bottom-right' ? 'margin-left: auto; margin-top: auto;' : null};

  ${(p: IconButtonStylesProps) => (p.align == 'center' ? 'margin: auto' : null)};

  &:hover ${Button} {
    transform: scale(0.95);
    box-shadow: none;
  }
`;

const Icon = styled.span`
  display: block;
  color: ${(p: IconButtonStylesProps) =>
    p.active ? 'var(--color-contrast)' : 'var(---color-base-li)'};

  svg {
    margin: auto;
    font-size: 2em;
    ${(p: IconButtonStylesProps) => (p.flipIconY ? 'transform: scaleY(-1);' : null)}
  }
`;

export const IconButtonStyles = {
  Wrapper,
  Button,
  Icon,
};
