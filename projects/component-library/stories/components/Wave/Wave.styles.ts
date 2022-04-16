import styled, { keyframes } from 'styled-components';

const wave = keyframes`
  from {
    transform: rotate(-10deg);
  }
  to {
    transform: rotate(30deg);
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  padding: 60px;
  overflow: hidden;

  svg {
    display: inline-block;
    animation: ${wave} 1000ms infinite alternate ease-in-out;
    transform-origin: 75% 80%;
  }
`;

export const WaveStyles = {
  Wrapper,
};
