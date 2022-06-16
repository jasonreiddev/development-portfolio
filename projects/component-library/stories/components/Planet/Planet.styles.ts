import styled, { keyframes } from 'styled-components';

import { ColorPair, useBase } from '../../../../helpers/media';

interface PlanetStylesProps {
  active?: boolean;
  colorPair?: ColorPair;
}

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  padding: 60px;
`;

const Planet = styled.div<PlanetStylesProps>`
  width: 80px;
  height: 80px;
  background: ${(p: PlanetStylesProps) => useBase(p.colorPair)};
  border-radius: 50%;
`;

const orbit = keyframes`
 from {
        transform: rotate(0deg) translateX(80px);
      }
      to {
        transform: rotate(360deg) translateX(80px);
      }
`;

const Moon = styled.div<PlanetStylesProps>`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  background: ${(p: PlanetStylesProps) => useBase(p.colorPair)};
  border-radius: 50%;

  transform: rotate(0deg) translateX(80px);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${orbit} 6000ms linear infinite;
  }
`;

export const PlanetStyles = {
  Wrapper,
  Planet,
  Moon,
};
