import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  width: 50px;
  font-weight: var(--font-weight-bold);

  a {
    color: var(--color-black);
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

export const ShareStyles = {
  Wrapper,
};
