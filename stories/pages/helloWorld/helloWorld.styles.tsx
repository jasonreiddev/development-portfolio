import styled from 'styled-components';
import { clamp } from '../../../helpers/media';

export const Text = styled.h2`
  font-size: ${clamp({ multiplier: 1.2 })};
  font-weight: 900;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
`;

export const HelloWorldStyles = {
  Text,
};
