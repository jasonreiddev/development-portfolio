import styled from 'styled-components';
import { ColorPair, useBase } from '../../../../helpers/media';

interface CheckboxStylesProps {
  checked?: boolean;
  colorPair?: ColorPair;
}

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledCheckbox = styled.div<CheckboxStylesProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${(p) => (p.checked ? useBase(p.colorPair) : 'var(---color-base-li)')};
  border: 1px solid var(--color-contrast);
  border-radius: 3px;
  transition: all 150ms;
  margin-right: 8px;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  SVG {
    visibility: ${(p) => (p.checked ? 'visible' : 'hidden')};
  }
`;

export const CheckboxStyles = {
  Wrapper,
  HiddenCheckbox,
  StyledCheckbox,
};
