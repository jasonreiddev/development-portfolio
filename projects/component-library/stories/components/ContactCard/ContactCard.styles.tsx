import styled from 'styled-components';

import { clamp } from '../../../../helpers/media';
import { ColorPair, useColorPair } from '../../../../helpers/media';

interface ContactCardStylesProps {
  colorPair?: ColorPair;
}

const Card = styled.article`
  min-width: 250px;
  border-radius: var(--border-radius);
  padding: 24px;
  background: var(--color-base);
  box-shadow: var(--box-shadow);
  text-align: center;

  max-width: 500px;
  margin: auto;
  margin-top: 40px;
  border-radius: var(--border-radius);

  ${(p: ContactCardStylesProps) => useColorPair(p.colorPair, '10pt')}

  .avatar {
    display: block;
    width: 128px;
    height: 128px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -64px;
    margin-bottom: 16px;
    border: 6px solid var(--color-base);
  }

  h2 {
    font-size: ${clamp({ multiplier: 1.25 })};
    font-weight: 600;
    margin-bottom: 0px;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
  }
`;

export const ContactCardStyles = {
  Card,
};
