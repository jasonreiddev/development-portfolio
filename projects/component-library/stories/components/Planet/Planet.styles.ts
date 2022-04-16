import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  padding: 60px;
`;

const Planet = styled.div`
  width: 80px;
  height: 80px;
  background: var(--color-primary);
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

const Moon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  background: var(--color-secondary);
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
