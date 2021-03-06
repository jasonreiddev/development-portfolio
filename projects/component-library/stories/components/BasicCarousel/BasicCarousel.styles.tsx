import styled from 'styled-components';

const Carousel = styled.div`
  .rightArrow {
    position: absolute;
    top: 50%;
    right: 20px;
    font-size: 2rem;
  }

  .leftArrow {
    position: absolute;
    top: 50%;
    left: 20px;
    font-size: 2rem;
  }
`;

const Image = styled.img`
  aspect-ratio: 16/9;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0px 50px;
  object-fit: cover;
`;

export const BasicCarouselStyles = {
  Carousel,
  Image,
};
