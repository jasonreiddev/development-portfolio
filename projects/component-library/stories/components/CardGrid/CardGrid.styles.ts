import styled from 'styled-components';

interface CardGridStylesProps {
  // Should be 200+ for fitting tags and max content
  size: number;
}

const Container = styled.div<CardGridStylesProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${(p) => p.size}px, 1fr));
  grid-auto-rows: ${(p) => p.size}px;
  grid-gap: 10px;
  margin: var(--spacing);
`;

export const CardGridStyles = {
  Container,
};
