import styled from 'styled-components';

import { ColorPair, useContrast } from 'helpers/media';

const Wrapper = styled.div`
  text-align: center;
  width: 50px;
  font-weight: var(--font-weight-bold);

  a {
    color: ${useContrast(ColorPair.Primary)};
  }

  svg {
    width: 50px;
    height: 25px;
    margin-bottom: 8px;
    transition: transform 0.4s;
  }

  @media (prefers-reduced-motion: no-preference) {
    &:hover svg {
      transform: rotate(180deg);
    }
  }

  div {
    margin: 0;
    height: 20px;
  }
`;

const Share = styled.a`
  display: block;
`;

export const ShareStyles = {
  Wrapper,
  Share,
};
