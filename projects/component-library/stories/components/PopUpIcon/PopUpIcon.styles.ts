import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  padding: 60px;
  overflow: hidden;
`;

const popUp = keyframes`
  100% {
    transform: unset
  }
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  color: white;
  background: var(--color-tertiary);
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: var(--box-shadow);
  cursor: pointer;

  position: absolute;
  right: 32px;
  bottom: 32px;
  transform: translateY(calc(100% + 30px));

  @media (prefers-reduced-motion: no-preference) {
    animation: ${popUp} 2000ms;
    animation-delay: 500ms;
    transform: translateY(calc(100% + 30px));
    animation-fill-mode: forwards;
  }
`;

export const PopUpIconStyles = {
  Wrapper,
  Button,
};
