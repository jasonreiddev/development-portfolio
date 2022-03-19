import styled from 'styled-components';

import { Device, from } from '../../../../helpers/media';

interface CardStylesProps {
  modifyWidth?: 1 | 2 | 'full';
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
  }

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

export const CardStyles = {
  Container,
  TagsContainer,
  Tag,
  Content,
};
