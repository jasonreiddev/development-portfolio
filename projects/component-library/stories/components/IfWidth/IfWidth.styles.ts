import styled from 'styled-components';
import { between, Device } from '../../../../helpers/media';

interface IfWidthStylesProps {
  minWidth?: Device;
  maxWidth?: Device;
}

const IfWidthTrue = styled.div<IfWidthStylesProps>`
  display: none;
  @media ${(p: IfWidthStylesProps) => {
      return between(p.minWidth, p.maxWidth);
    }} {
    display: block;
  }
`;

const IfWidthFalse = styled.div<IfWidthStylesProps>`
  display: block;

  @media ${(p: IfWidthStylesProps) => {
      return between(p.minWidth, p.maxWidth);
    }} {
    display: none;
  }
`;

export const IfWidthStyles = {
  IfWidthTrue,
  IfWidthFalse,
};
