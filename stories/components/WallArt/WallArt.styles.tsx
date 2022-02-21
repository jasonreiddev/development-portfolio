import styled from 'styled-components';

interface WallArtStylesProps {
  backgroundColor?: string;
}

export const Wrapper = styled.span<WallArtStylesProps>`
  padding: 8px;
  position: relative;
  isolation: isolate;
  background: var(--color-base);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  border: 0;

  img {
    display: block;
    border-radius: var(--border-radius);
  }

  .caption {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    text-align: center;
    padding: 8px;
    background: var(--color-base);
    backdrop-filter: blur(10px);
  }
`;

export const WallArtStyles = {
  Wrapper,
};
