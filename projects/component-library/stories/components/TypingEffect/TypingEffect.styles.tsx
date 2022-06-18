import styled, { keyframes } from 'styled-components';

const blink = keyframes`
    49% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Cursor = styled.span`
  animation: ${blink} 1.5s linear infinite;
`;

export const TypingEffectStyles = {
  Cursor,
};
