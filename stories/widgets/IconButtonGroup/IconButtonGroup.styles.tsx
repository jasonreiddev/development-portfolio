import styled from 'styled-components';

interface IconButtonGroupStylesProps {
  backgroundColor?: string;
}

export const ButtonGroupStyles = styled.div<IconButtonGroupStylesProps>`
  button {
    margin: 10px;
  }
`;
