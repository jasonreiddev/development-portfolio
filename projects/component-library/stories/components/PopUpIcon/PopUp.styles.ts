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

const PopUp = styled.div`
  transform: translateY(calc(100% + 30px));

  @media (prefers-reduced-motion: no-preference) {
    animation: ${popUp} 2000ms;
    animation-delay: 500ms;
    transform: translateY(calc(100% + 30px));
    animation-fill-mode: forwards;
  }
`;

export const PopUpStyles = {
  Wrapper,
  PopUp,
};
