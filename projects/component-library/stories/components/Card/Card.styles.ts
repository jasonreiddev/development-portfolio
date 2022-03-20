import styled from 'styled-components';

import { Device, from } from '../../../../helpers/media';

interface CardStylesProps {
  modifyWidth?: 1 | 2 | 'full';
  canFlip?: boolean;
  flipped?: boolean;
}

// TODO Add zoom on hover and make clear which cards flip and which have urls

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
  perspective: 200vw;
`;

const ContainerInner = styled.div<CardStylesProps>`
  /* Required for storybook */
  min-height: 140px;
  /* Flip */
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${(p) =>
    p.flipped
      ? `
      transform: rotateX(180deg);
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
  background-color: var(--color-base-semi-bold-66);

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
  width: 100%;
  gap: 2px;
  max-height: calc(100% - 108px);
  overflow: hidden;
`;

const Tag = styled.div`
  padding: 6px;
  background-color: var(--color-base-semi-bold-66);
  pointer-events: all;
  cursor: pointer;
`;

const Front = styled.div<CardStylesProps>`
  background-color: var(--color-primary);

  ${(p) =>
    p.canFlip
      ? `
      cursor: pointer;
      `
      : null}

  ${(p) =>
    p.flipped
      ? `
      pointer-events: none;
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
  ${(p) =>
    p.flipped
      ? `
      pointer-events: all;
      `
      : `pointer-events: none;`}

  background-color: var(--color-secondary);

  /* Flip */
  transform: rotateX(180deg);
`;

const BackContent = styled(Content)`
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: calc(100% - 20px);
  }
  ::-webkit-scrollbar-thumb {
    border: 0.1rem solid var(--color-contrast);
    background-color: var(--color-primary);
    border-radius: 0.75rem;
  }
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
