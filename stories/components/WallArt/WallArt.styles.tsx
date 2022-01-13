import styled from 'styled-components';

interface WallArtStylesProps {
  backgroundColor?: string;
}

export const WallArtStyles = styled.button<WallArtStylesProps>`
  padding: 8px;
  position: relative;
  isolation: isolate;
  background: var(--color-white);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

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
    background: hsl(0deg 0% 100% / 0.9);
    backdrop-filter: blur(10px);
  }
`;
