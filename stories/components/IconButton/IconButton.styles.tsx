import styled from 'styled-components';

interface IconButtonStylesProps {
  backgroundColor?: string;
  active?: boolean;
}

export const IconButtonStyles = styled.button<IconButtonStylesProps>`
  aspect-ratio: 1/1;
  border: 0;
  background: var(--color-white);
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
      p.active ? 'var(--color-black)' : 'var(--color-white)'};

    svg {
      margin: auto;
      font-size: 2em;
    }
  }

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
