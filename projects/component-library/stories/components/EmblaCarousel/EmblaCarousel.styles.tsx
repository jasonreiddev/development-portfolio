import { Device, from } from 'projects/helpers/media';
import styled from 'styled-components';

interface EmblaCarouselStylesProps {
  slideLength?: number;
}

export const Wrapper = styled.div`
  position: relative;
  padding: 26px;
}
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

const Slide = styled.div`
  position: relative;
  padding-left: 10px;

  min-width: 100%;
  @media ${from(Device.Tablet)} {
    min-width: 50%;
  }

  @media ${from(Device.TabletLarge)} {
    min-width: 33.3%;
  }

  @media ${from(Device.ActualDesktop)} {
    min-width: 25%;
  }
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

const Button = styled.button<EmblaCarouselStylesProps>`
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

    ${(p) => (p.slideLength && p.slideLength <= 1 ? `display: none;` : null)};
    @media ${from(Device.Tablet)} {
      // 50%;
      ${(p) => (p.slideLength && p.slideLength <= 2 ? `display: none;` : null)};
    }
    @media ${from(Device.TabletLarge)} {
      ${(p) => (p.slideLength && p.slideLength <= 3 ? `display: none;` : null)};
    }
    @media ${from(Device.ActualDesktop)} {
      ${(p) => (p.slideLength && p.slideLength <= 4 ? `display: none;` : null)};
    }
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
