import styled from 'styled-components';

interface IconButtonStylesProps {
  backgroundColor?: string;
  active?: boolean;
}

export const IconButtonStyles = styled.button<IconButtonStylesProps>`
  background: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  aspect-ratio: 1/1;
  border: 0;

  .icon {
    display: block;
    color: ${(p: IconButtonStylesProps) =>
      p.active ? 'var(--color-black)' : 'var(--color-white)'};

    svg {
      margin: auto;
      font-size: 2em;
    }
  }

  /* font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: var(--font-weight-bold);
  border: 0;
  border-radius: var(--border-radius);
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  
  Below unused temp
  */

  &.primary {
    color: var(--color-white);
    background-color: ${(p: IconButtonStylesProps) =>
      p.backgroundColor ? `${p.backgroundColor};` : 'var(--color-primary)'};
  }

  &.secondary {
    color: var(--color-black);
    background-color: ${(p: IconButtonStylesProps) =>
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
