import styled from 'styled-components';

import { ColorPair, useBase } from '../../../../helpers/media';

interface EmblaCarouselStylesProps {
  size?: number;
  colorPair?: ColorPair;
}

export const Wrapper = styled.div`
  position: relative;
  margin: 26px;
`;

const Viewport = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: var(--border-radius);

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

const Slide = styled.div<EmblaCarouselStylesProps>`
  position: relative;
  padding-left: 10px;

  min-width: ${(p) => p.size}%;
`;

const SlideInner = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px;

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
  color: ${(p: EmblaCarouselStylesProps) => useBase(p.colorPair)};
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
  left: -20px;
`;
const ButtonNext = styled(Button)`
  right: -20px;
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
