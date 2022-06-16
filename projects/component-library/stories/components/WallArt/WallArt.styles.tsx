import styled from 'styled-components';
import { TextCardStyles } from '../../widgets/TextCard/TextCard.styles';

interface WallArtStylesProps {
  backgroundColor?: string;
}

export const ImageWrapper = styled.div<WallArtStylesProps>`
  overflow: hidden;
  @media (prefers-reduced-motion: no-preference) {
    img {
      transition: transform 0.5s;
    }
    &:hover img {
      transform: scale(1.2);
    }
  }
`;

export const Wrapper = styled.div<WallArtStylesProps>`
  position: relative;
  background: var(--color-base);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  overflow: hidden;
  width: fit-content;

  ${TextCardStyles.Wrapper} {
    border-radius: 0;
    margin: 0;
    width: 100%;
  }
`;

export const WallArtStyles = {
  Wrapper,
  ImageWrapper,
};
