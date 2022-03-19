import styled from 'styled-components';

import { Device, from } from '../../../../helpers/media';

interface CardStylesProps {
  modifyWidth?: 1 | 2 | 'full';
  canFlip?: boolean;
  flipped?: boolean;
}

const Container = styled.a<CardStylesProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border: none;
  font-size: 13px;
  flex-wrap: wrap;
  color: var(--color-contrast);
  background-color: var(--color-primary);
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
  height: 100%;
  width: 100%;
  display: block;
  ${(p) =>
    p.flipped
      ? `
     display: none;
      `
      : null}

  ${(p) =>
    p.canFlip
      ? `
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
`;

const Back = styled.div<CardStylesProps>`
  width: 100%;
  height: 100%;
  display: none;
  ${(p) =>
    p.flipped
      ? `
     display: block;
      `
      : null};

  :after {
    content: '';
    bottom: 0;
    right: 0;
    position: absolute;
    border-style: solid;
    border-width: 0 0 35px 35px;
    border-color: transparent transparent var(--color-primary) transparent;
    transition: all 0.3s;
  }
  :hover:after {
    border-width: 0 0 25px 25px;
  }
`;

const BackContent = styled(Content)`
  height: 100%;
  // https://www.w3schools.com/howto/howto_css_flip_card.asp
`;

export const CardStyles = {
  Container,
  TagsContainer,
  Tag,
  Content,
  Front,
  Back,
  BackContent,
};
