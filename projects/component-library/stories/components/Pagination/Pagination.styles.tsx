import styled from 'styled-components';

import { Device, from } from '../../../helpers/media';

export const Wrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  border-radius: 5px;
  text-align: center;
  & > * {
    font-weight: bold;
    font-size: 16pt;
    color: var(--color-primary);
    padding: 1rem;
    flex: 1;
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--color-secondary);
      cursor: default;
    }
    &[disabled] {
      pointer-events: none;
      color: var(--color-primary);
    }
  }

  @media ${from(Device.Tablet)} {
    .word {
      display: none;
    }
    font-size: 1.4rem;
  }
`;

export const PaginationStyles = {
  Wrapper,
};
