import { useState } from 'react';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';

import { CarouselStyles, ImageStyles } from './Carousel.styles';

interface Image {
  src: string;
  altText?: string;
}

interface CarouselProps {
  images: Image[];
}

export const Carousel = ({ images }: CarouselProps): JSX.Element => {
  if (images != undefined && images.length > 0) {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = (): void => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = (): void => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
      <CarouselStyles>
        <MdArrowLeft className="leftArrow" onClick={prevSlide} />
        <MdArrowRight className="rightArrow" onClick={nextSlide} />
        {images.map(
          (image, index) =>
            index == current && (
              <div key={`${index}-cl`}>
                <ImageStyles src={image.src} alt={image.altText} />
              </div>
            ),
        )}
      </CarouselStyles>
    );
  }
  return <></>;
};
