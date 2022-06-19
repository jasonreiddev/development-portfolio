import styled from 'styled-components';

import {
  Device,
  from,
  ColorPair,
  useBaseIncreaseContrast,
  useContrast,
  useContrastDecreaseContrast,
} from '../../../../helpers/media';

interface PaginationStylesProps {
  active?: boolean;
  colorPair?: ColorPair;
}

export const Wrapper = styled.div<PaginationStylesProps>`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  border-radius: 5px;
  text-align: center;
  & > * {
    font-weight: bold;
    font-size: 16pt;
    color: ${(p: PaginationStylesProps) => useContrast(p.colorPair)};
    padding: 1rem;
    flex: 1;
    text-decoration: none;
    &[aria-current],
    &.current {
      color: ${(p: PaginationStylesProps) => useBaseIncreaseContrast(p.colorPair)};
      cursor: default;
    }
    &[disabled] {
      pointer-events: none;
      color: ${(p: PaginationStylesProps) => useContrastDecreaseContrast(p.colorPair)};
    }
  }

  @media ${from(Device.Tablet)} {
    .word {
      display: none;
    }
    font-size: 1.4rem;
  }
`;

export const PaginationStyles = {
  Wrapper,
};
