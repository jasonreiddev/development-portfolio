import styled from 'styled-components';

import { Device, from } from '../../../../helpers/media';

interface CardStylesProps {
  modifyWidth?: 1 | 2 | 'full';
  canFlip?: boolean;
  flipped?: boolean;
}

const Container = styled.a<CardStylesProps>`
  font-size: 13px;
  flex-wrap: wrap;
  color: var(--color-contrast);
  position: relative;

  ${(p) =>
    typeof p.modifyWidth == 'number'
      ? `
        @media ${from(Device.MobileLarge)} {
      grid-column: span ${p.modifyWidth}; 
        }
        `
      : p.modifyWidth == 'full'
      ? 'grid-column: 1 / -1;'
      : null}

  img {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Flip */
  background-color: transparent;
  perspective: 1000px;
`;

const ContainerInner = styled.div<CardStylesProps>`
  /* Flip */
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${(p) =>
    p.flipped
      ? `
      transform: rotateY(180deg);
      `
      : null}
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  padding: 8px;
  bottom: 0;
  position: absolute;
  width: 100%;
  background-color: var(--color-base-semi-bold-80);

  h3 {
    font-weight: var(--font-weight-bold);
    color: var(--color-contrast-bold);
    margin-bottom: 0.5em;
  }
`;

const TagsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  top: 0;
  width: 192px;
  gap: 2px;
  max-height: 72px;
  overflow: hidden;
`;

const Tag = styled.div`
  padding: 6px;
  background-color: var(--color-base-semi-bold-80);
  pointer-events: all;
  cursor: pointer;
`;

const Front = styled.div<CardStylesProps>`
  background-color: var(--color-primary);
  ${(p) =>
    p.canFlip
      ? `
      cursor: pointer;
      :after {
        content: '';
        bottom: 0;
        right: 0;
        position: absolute;
        border-style: solid;
        border-width: 0 0 25px 25px;
        border-color: transparent transparent var(--color-secondary) transparent;
        transition: all .3s;
      }
      :hover:after {
        border-width: 0 0 35px 35px;
      }
      `
      : null}

  /* Flip */
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const Back = styled(Front)`
  background-color: var(--color-secondary);
  :after {
    border-color: transparent transparent var(--color-primary) transparent;
    border-width: 0 0 35px 35px;
  }

  /* Flip */
  transform: rotateY(180deg);
`;

const BackContent = styled(Content)`
  height: 100%;
`;

export const CardStyles = {
  Container,
  ContainerInner,
  TagsContainer,
  Tag,
  Content,
  Front,
  Back,
  BackContent,
};
