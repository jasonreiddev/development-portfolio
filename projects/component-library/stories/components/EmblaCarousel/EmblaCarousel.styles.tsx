import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background-color: #f7f7f7;
  padding: 20px;
  max-width: 670px;
  margin-left: auto;
  margin-right: auto;
`;

const Viewport = styled.div`
  overflow: hidden;
  width: 100%;

  &.is-draggable {
    cursor: move;
    cursor: grab;
  }

  &.is-dragging {
    cursor: grabbing;
  }
`;

const Container = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: -10px;
`;

const Slide = styled.div`
  position: relative;
  min-width: 100%;
  padding-left: 10px;
`;

const SlideInner = styled.div`
  position: relative;
  overflow: hidden;
  height: 190px;

  & > * {
    height: 100%;
    width: 100%;
  }
`;

const Button = styled.button`
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  fill: #1bcacd;
  padding: 0;

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }

  svg {
    height: 100%;
    width: 100%;
  }
`;

const ButtonPrev = styled(Button)`
  left: 27px;
`;
const ButtonNext = styled(Button)`
  right: 27px;
`;

export const EmblaCarouselStyles = {
  Wrapper,
  Viewport,
  Container,
  Slide,
  SlideInner,
  ButtonPrev,
  ButtonNext,
};
