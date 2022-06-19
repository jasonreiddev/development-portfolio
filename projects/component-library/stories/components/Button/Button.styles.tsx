import styled from 'styled-components';

import { ColorPair, useColorPair } from '../../../../helpers/media';

interface ButtonStylesProps {
  size?: 'small' | 'medium' | 'large';
  colorPair?: ColorPair;
}

const Button = styled.button<ButtonStylesProps>`
  font-weight: var(--font-weight-bold);
  border: 0;
  display: flex;
  line-height: 1;
  background: var(--color-base);
  color: var(--color-contrast);
  border-radius: var(--border-radius);

  svg {
    margin-right: 2px;
  }

  cursor: pointer;
  box-shadow: var(--box-shadow);
  backface-visibility: hidden;

  ${(p: ButtonStylesProps) => useColorPair(p.colorPair, '10pt')}

  ${(p: ButtonStylesProps) => {
    switch (p.size) {
      case 'small': {
        return `
        font-size: 12px;
        padding: 10px 16px;`;
      }
      case 'medium': {
        return `
        font-size: 14px;
        padding: 11px 20px;`;
      }
      case 'large': {
        return `
        font-size: 16px;
        padding: 12px 24px;`;
      }
    }
  }};
`;

const Wrapper = styled.div`
  width: fit-content;
  margin: var(--spacing);
  margin: auto;

  &:hover ${Button} {
    transform: scale(0.95);
    box-shadow: none;
  }
`;

export const ButtonStyles = {
  Wrapper,
  Button,
};
