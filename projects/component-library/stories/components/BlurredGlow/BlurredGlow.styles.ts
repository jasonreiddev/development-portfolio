import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  padding: 60px;
`;

const Gradient = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: linear-gradient(deeppink, red, coral, gold, white);
`;

const Content = styled(Gradient)`
  filter: drop-shadow(0px 0px 25px hsl(0deg 0% 0% / 0.3));
`;

const Blurred = styled(Gradient)`
  position: absolute;
  filter: blur(40px);
  transform: scale(1.3) translateX(10%) rotate(30deg);
`;

export const BlurredGlowStyles = {
  Wrapper,
  Content,
  Blurred,
};
