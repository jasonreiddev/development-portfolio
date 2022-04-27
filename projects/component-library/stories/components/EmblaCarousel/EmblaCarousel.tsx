import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel/components/Options';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import { EmblaCarouselStyles as s } from './EmblaCarousel.styles';

export interface EmblaCarouselProps {
  slides: number[] | string[] | JSX.Element[];
  emblaOptions?: EmblaOptionsType;
  displaying: number;
  size: number;
}

interface ButtonProps {
  enabled: boolean;
  onClick: () => void;
}

const PrevButton = ({ enabled, onClick }: ButtonProps): JSX.Element => (
  <s.ButtonPrev onClick={onClick} disabled={!enabled}>
    <MdNavigateBefore />
  </s.ButtonPrev>
);

const NextButton = ({ enabled, onClick }: ButtonProps): JSX.Element => (
  <s.ButtonNext onClick={onClick} disabled={!enabled}>
    <MdNavigateNext />
  </s.ButtonNext>
);

export const EmblaCarousel = ({
  slides,
  emblaOptions,
  displaying,
  size,
}: EmblaCarouselProps): JSX.Element => {
  const [viewportRef, embla] = useEmblaCarousel({ ...emblaOptions });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const wrapperRef = React.createRef<HTMLInputElement>();

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <s.Wrapper ref={wrapperRef}>
      <s.Viewport ref={viewportRef}>
        <s.Container>
          {slides?.map((slide, index) => {
            return (
              <s.Slide key={index} size={size}>
                <s.SlideInner>{slide}</s.SlideInner>
              </s.Slide>
            );
          })}
        </s.Container>
      </s.Viewport>
      {displaying < slides.length && (
        <>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </>
      )}
    </s.Wrapper>
  );
};
