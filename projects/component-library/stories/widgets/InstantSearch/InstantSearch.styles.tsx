import styled from 'styled-components';

const Title = styled.h3`
  font-size: clamp(18px * 0.8, 1vw + 18px * 0.8, 2em * 0.8);
  margin: var(--spacing);
  margin-bottom: calc(-0.5 * var(--spacing));
`;

const SearchWrapper = styled.div`
  margin: var(--spacing);

  .ais-SearchBox-input {
    border: 0;
    width: 100%;
    padding: calc(0.25 * var(--spacing));
    width: calc(100% - var(--spacing));
  }

  .ais-SearchBox-submit {
    right: var(--spacing);
    position: absolute;
    background: none;
    border: 0;
    padding: calc(0.25 * var(--spacing));
  }

  .ais-SearchBox-reset {
    display: none;
  }
`;

export const InstantSearchStyles = {
  Title,
  SearchWrapper,
};
