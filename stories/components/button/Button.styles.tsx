import styled from 'styled-components';

interface ButtonStylesProps {
  backgroundColor?: string;
}

export const ButtonStyles = styled.button<ButtonStylesProps>`
  font-weight: var(--font-weight-bold);
  border: 0;
  border-radius: var(--border-radius);
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  box-shadow: var(--box-shadow);
  color: var(--color-white);

  &.primary {
    background-color: ${(p: ButtonStylesProps) =>
      p.backgroundColor ? `${p.backgroundColor};` : 'var(--color-primary)'};
  }

  &.secondary {
    background-color: ${(p: ButtonStylesProps) =>
      p.backgroundColor ? `${p.backgroundColor};` : 'var(--color-secondary)'};
  }

  &.small {
    font-size: 12px;
    padding: 10px 16px;
  }

  &.medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  &.large {
    font-size: 16px;
    padding: 12px 24px;
  }
`;