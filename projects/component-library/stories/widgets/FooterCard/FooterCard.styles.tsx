import styled from 'styled-components';
import { ColorPair, useBase } from 'helpers/media';

const Wrapper = styled.div`
  width: fit-content;
  margin: auto;
  padding: 10px;
`;

const MediaLinks = styled.span`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  font-size: 30px;
  margin: 0 4px;

  svg {
    height: 30px;
    width: 30px;
    margin: 0 4px;
    color: ${useBase(ColorPair.Primary)};
  }

  @media (prefers-reduced-motion: no-preference) {
    svg {
      transition: transform 0.2s;
    }

    a:hover svg {
      transform: scale(1.1);
    }
  }

  a {
    display: flex;
  }
`;

export const Text = styled.span`
  display: block;
  text-align: center;
`;

export const FooterCardStyles = {
  Wrapper,
  MediaLinks,
  Text,
};
