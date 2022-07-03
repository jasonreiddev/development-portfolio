import styled from 'styled-components';

import { ColorPair, useBase } from 'helpers/media';

const Wrapper = styled.div`
  text-align: center;
  width: 50px;
`;

const Likes = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;

  svg {
    font-size: 25px;
    transform: translateY(0%);
    margin: auto;
    margin-bottom: 8px;
  }

  div {
    margin: 0;
    height: 20px;
  }

  .solid-heart {
    fill: ${useBase(ColorPair.Primary)};
    ${(p) => (p.active ? ` display: block;` : `display: none;`)};
    position: absolute;
  }

  @media (prefers-reduced-motion: no-preference) {
    svg {
      transition: transform 0.2s;
    }
    &:hover svg {
      transform: scale(1.1);
    }
  }
`;

export const LikeStyles = {
  Wrapper,
  Likes,
};
