import styled from 'styled-components';

import { Device, from } from '../../../../helpers/media';
import { CardStyles } from '../Card/Card.styles';
import { ColorPair, useBase } from '../../../../helpers/media';

interface CardTimelineStylesProps {
  // Should be 200+ for fitting tags and max content
  size: number;
  colorPair?: ColorPair;
}

const Container = styled.div<CardTimelineStylesProps>`
  display: grid;
  grid-auto-rows: ${(p) => p.size}px;
  grid-gap: 10px 40px;
  padding: 10px;
  position: relative;
  margin-bottom: 30px;

  ${CardStyles.Container} {
    max-width: ${(p) => p.size}px;
    margin: 0 auto;
    width: 100%;
  }

  @media ${from(Device.Tablet)} {
    grid-template-columns: 1fr 1fr;
    ${CardStyles.Container}:nth-child(even) {
      margin-left: 0;
    }

    ${CardStyles.Container}:before {
      content: '';
      position: absolute;
      height: 10px;
      width: 15px;
      background-color: ${(p: CardTimelineStylesProps) => useBase(p.colorPair)};
      right: -15px;
      top: calc(${(p) => p.size / 2}px - 5px);
    }

    ${CardStyles.Container}:nth-child(even) {
      &:before {
        right: auto;
        left: -15px;
      }
      transform: translateY(calc(${(p) => p.size / 2}px + 5px));
    }
    ${CardStyles.Container}:nth-child(odd) {
      margin-right: 0;
    }
  }
`;

const Line = styled.div<CardTimelineStylesProps>`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10px;
  margin: calc(${(p) => p.size / 2}px + 5px) calc(50% - 5px) 0;
  background-color: ${(p: CardTimelineStylesProps) => useBase(p.colorPair)};
  margin-bottom: -20px;
  z-index: -1;

  &:nth-child(odd):before {
    content: '';
    position: absolute;
    height: 150px;
    width: 10px;
    background-color: ${(p: CardTimelineStylesProps) => useBase(p.colorPair)};
    bottom: -150px;
  }

  &:after {
    content: '';
    position: absolute;
    margin: 0 calc(50% - 20px);
    height: 10px;
    bottom: 0;
    width: 40px;
    background-color: ${(p: CardTimelineStylesProps) => useBase(p.colorPair)};
  }

  &:nth-child(odd):after {
    margin-bottom: -150px;
  }
`;

export const CardTimelineStyles = {
  Container,
  Line,
};
