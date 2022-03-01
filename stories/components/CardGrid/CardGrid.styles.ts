import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  padding: 10px;

  > * {
    max-width: 400px;
  }
`;

export const CardStyles = {
  Container,
};
