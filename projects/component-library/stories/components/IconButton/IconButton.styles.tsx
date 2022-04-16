import styled from 'styled-components';

interface IconButtonStylesProps {
  backgroundColor?: string;
  active?: boolean;
}

const Wrapper = styled.div`
  width: fit-content;

  &:hover button {
    transform: scale(0.95);
    box-shadow: none;
  }
`;

const Button = styled.button<IconButtonStylesProps>`
  aspect-ratio: 1/1;
  border: 0;
  background: var(--color-base);
  border-radius: var(--border-radius);

  cursor: pointer;
  box-shadow: var(--box-shadow);
  backface-visibility: hidden;

  &:hover {
    transform: scale(0.95);
    box-shadow: none;
  }

  .icon {
    display: block;
    color: ${(p: IconButtonStylesProps) =>
      p.active ? 'var(--color-contrast)' : 'var(--color-base-bold)'};

    svg {
      margin: auto;
      font-size: 2em;
    }
  }

  &.primary {
    color: var(--color-contrast);
    background-color: ${(p: IconButtonStylesProps) =>
      p.backgroundColor ? `${p.backgroundColor};` : 'var(--color-primary)'};
  }

  &.secondary {
    color: var(--color-contrast);
    background-color: ${(p: IconButtonStylesProps) =>
      p.backgroundColor ? `${p.backgroundColor};` : 'var(--color-secondary)'};
  }

  &.small {
    font-size: 12px;
    padding: 10px 16px;
    min-width: 50px;
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

export const IconButtonStyles = {
  Wrapper,
  Button,
};
