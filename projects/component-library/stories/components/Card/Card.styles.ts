import styled, { css, keyframes } from 'styled-components';

import { Device, from } from '../../../../helpers/media';

interface CardStylesProps {
  modifyWidth?: 1 | 2 | 'full';
  canFlip?: boolean;
  flipped?: boolean;
  wasFlipped?: boolean;
  dark?: boolean;
  link?: boolean;
}

// TODO make clear which cards flip and which have urls

const Container = styled.button<CardStylesProps>`
  font-size: 13px;
  flex-wrap: wrap;
  color: var(--color-contrast);
  border: 0;
  padding: 0;
  text-align: left;
  position: relative;
  &[role='link'] {
    cursor: pointer;
  }

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
    @media (prefers-reduced-motion: no-preference) {
      transition: transform 0.5s;
    }
  }

  &:hover img {
    @media (prefers-reduced-motion: no-preference) {
      transform: scale(1.2);
    }
    transition: filter 0.5s;
    filter: brightness(${(p) => (p.dark ? `120%` : `90%`)});
  }

  /* Flip */
  background-color: transparent;
  perspective: 200vw;
`;

const flipAndReset = keyframes`
  from {
    transform: rotateX(180deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ContainerInner = styled.div<CardStylesProps>`
  /* Required for storybook */
  min-height: 140px;
  /* Flip */
  width: 100%;
  height: 100%;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.6s;
  }
  transform-style: preserve-3d;

  ${(p) =>
    p.flipped
      ? `
      transform: rotateX(180deg);
      `
      : null}

  ${(p) =>
    p.wasFlipped
      ? css`
          animation: ${flipAndReset} 0.6s;
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
  background-color: var(--color-base-semi-bold-o66);

  h3 {
    font-weight: var(--font-weight-bold);
    color: var(--color-contrast-bold);
    margin-bottom: 0.5em;
  }
`;

const TitleWrapper = styled.div`
  display: flex;

  svg {
    transform: translateY(2px);
    margin-right: 2px;
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
  background-color: var(--color-base-semi-bold-o66);
  cursor: pointer;
`;

const Front = styled.div<CardStylesProps>`
  background: linear-gradient(
    to left,
    ${(p) =>
      p.link
        ? `var(--color-tertiary), var(--color-tertiary-ld10)`
        : `var(--color-primary), var(--color-primary-ld10)`}
  );

  transition: filter 0.5s;
  &:hover {
    filter: brightness(${(p) => (p.dark ? `120%` : `90%`)});
  }
  border-radius: var(--border-radius);
  overflow: hidden;

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

  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const Back = styled(Front)`
  ${(p) =>
    p.flipped
      ? `
      pointer-events: all;
      `
      : `pointer-events: none;`}

  background: var(--color-secondary);

  /* Flip */
  transform: rotateX(180deg);
`;

const BackContent = styled(Content)`
  height: 100%;
  overflow-y: auto;
  background-color: var(--color-secondary-ldmax);
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: calc(100% - 20px);
  }
  ::-webkit-scrollbar-thumb {
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
  TitleWrapper,
  Front,
  Back,
  BackContent,
};
