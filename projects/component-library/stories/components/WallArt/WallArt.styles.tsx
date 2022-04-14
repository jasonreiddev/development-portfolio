import styled from 'styled-components';

interface WallArtStylesProps {
  backgroundColor?: string;
}

export const Wrapper = styled.div<WallArtStylesProps>`
  position: relative;
  background: var(--color-base);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  overflow: hidden;
  width: fit-content;

  img {
    display: block;
    border-radius: var(--border-radius);
    transition: transform 0.5s;
  }

  &:hover img {
    transform: scale(1.2);
  }

  .caption {
    position: absolute;
    left: 8px;
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
