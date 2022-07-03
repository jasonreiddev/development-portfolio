import styled from 'styled-components';

import { ColorPair, useColorPair, useBaseIncreaseContrast } from 'helpers/media';

interface SelectStylesProps {
  active?: boolean;
  colorPair?: ColorPair;
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationalBit = styled.div<SelectStylesProps>`
  ${(p: SelectStylesProps) => useColorPair(p.colorPair, '10pt')}
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${(p: SelectStylesProps) => useBaseIncreaseContrast(p.colorPair)};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  pointer-events: none;
`;

export const SelectStyles = {
  Wrapper,
  NativeSelect,
  PresentationalBit,
  IconWrapper,
};
