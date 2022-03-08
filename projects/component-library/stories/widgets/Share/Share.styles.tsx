import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  width: 50px;
  font-weight: var(--font-weight-bold);

  a {
    color: var(--color-contrast);
  }

  svg {
    width: 50px;
    height: 25px;
    transform: translateY(0%);
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
