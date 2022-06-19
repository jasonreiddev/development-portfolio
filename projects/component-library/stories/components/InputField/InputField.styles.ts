import styled from 'styled-components';

import { ColorPair, useColorPair, useBaseIncreaseContrast } from '../../../../helpers/media';

interface InputFieldStylesProps {
  colorPair?: ColorPair;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.25em;
`;

const Title = styled.span`
  margin-bottom: 5px;
`;

const Input = styled.div<InputFieldStylesProps>`
  position: relative;

  input {
    width: 100%;
    min-height: 40px;
    border: 1px solid var(--color-contrast);
    border-radius: 5px;
    padding: 0px 10px;
    ${(p: InputFieldStylesProps) => useColorPair(p.colorPair, '10pt')}

    ::placeholder {
      color: ${(p: InputFieldStylesProps) => useBaseIncreaseContrast(p.colorPair)};
      font-weight: 500;
    }
  }

  svg {
    stroke: var(--color-primary);
    color: var(--color-primary);
    font-size: 2rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) translateX(-10%);

    :hover {
      cursor: pointer;
    }
  }
`;

export const InputFieldStyles = {
  Container,
  Input,
  Title,
};
