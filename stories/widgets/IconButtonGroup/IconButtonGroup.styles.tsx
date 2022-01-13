import styled from 'styled-components';

interface IconButtonGroupStylesProps {
  backgroundColor?: string;
}

export const ButtonGroupStyles = styled.div<IconButtonGroupStylesProps>`
  background-color: ${(p: IconButtonGroupStylesProps) =>
    p.backgroundColor ? `${p.backgroundColor};` : 'var(--color-white)'};
  padding 10px;
  width: fit-content;
  border-radius: var(--border-radius);
  
  button {
    margin: 10px;
  }
`;
