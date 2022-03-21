import styled from 'styled-components';

import { clamp } from '../../../../helpers/media';

const Wrapper = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  background: var(--color-base);
  box-shadow: var(--box-shadow);

  button + button {
    margin-left: 10px;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: ${clamp({ multiplier: 1.5 })};
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
`;

const MenuItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 2em;

  a {
    color: var(--color-contrast);
    font-size: 1.5rem;
    line-height: 1;
  }
`;

export const HeaderStyles = {
  Wrapper,
  Title,
  MenuItems,
};
