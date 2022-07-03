import styled from 'styled-components';
import { clamp } from 'helpers/media';

export const Text = styled.h3`
  font-size: ${clamp({ multiplier: 0.8, initial: '18px' })};
  margin: var(--spacing);
  margin-bottom: calc(-0.5 * var(--spacing));
`;

export const TextSub = styled.h4`
  font-size: ${clamp({ multiplier: 0.8, initial: '12px' })};
  margin: var(--spacing);
  margin-bottom: calc(-0.5 * var(--spacing));
`;

export const PageTitleStyles = {
  Text,
  TextSub,
};
