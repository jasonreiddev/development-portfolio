import { useState, useEffect, useCallback, createRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel/components/Options';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import { EmblaCarouselStyles as s } from './EmblaCarousel.styles';
import { ColorPair } from '../../../../helpers/media';

export interface EmblaCarouselProps {
  slides: number[] | string[] | JSX.Element[];
  emblaOptions?: EmblaOptionsType;
  displaying: number;
  size: number;
  colorPairButton?: ColorPair;
}

interface ButtonProps {
  enabled: boolean;
  onClick: () => void;
  colorPair: ColorPair;
}

const PrevButton = ({ enabled, onClick, colorPair }: ButtonProps): JSX.Element => (
  <s.ButtonPrev onClick={onClick} disabled={!enabled} colorPair={colorPair}>
    <MdNavigateBefore />
  </s.ButtonPrev>
);

const NextButton = ({ enabled, onClick, colorPair }: ButtonProps): JSX.Element => (
  <s.ButtonNext onClick={onClick} disabled={!enabled} colorPair={colorPair}>
    <MdNavigateNext />
  </s.ButtonNext>
);

export const EmblaCarousel = ({
  slides,
  emblaOptions,
  displaying,
  size,
  colorPairButton = ColorPair.Secondary,
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

  const wrapperRef = createRef<HTMLInputElement>();

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

      {
        // todo set to '<= slides.length', resolve issue with enabled/disabled incorrectly with multiple
        displaying <= 1 && (
          <>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} colorPair={colorPairButton} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} colorPair={colorPairButton} />
          </>
        )
      }
    </s.Wrapper>
  );
};
