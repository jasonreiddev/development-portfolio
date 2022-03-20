import styled from 'styled-components';

interface CardTimelineStylesProps {
  // Should be 200+ for fitting tags and max content
  size: number;
}

const Container = styled.div<CardTimelineStylesProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: ${(p) => p.size}px;
  grid-gap: 10px 40px;
  padding: 10px;
  position: relative;

  a:before {
    content: '';
    position: absolute;
    height: 10px;
    width: 20px;
    background-color: var(--color-secondary);
    right: -20px;
    top: calc(${(p) => p.size / 2}px - 5px);
  }

  a:nth-child(even) {
    &:before {
      right: auto;
      left: -20px;
    }
    transform: translateY(calc(${(p) => p.size / 2}px + 5px));
  }
`;

const Line = styled.div<CardTimelineStylesProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10px;
  margin: calc(${(p) => p.size / 2}px + 5px) calc(50% - 5px) 0;
  background-color: var(--color-secondary);
  margin-bottom: -20px;

  &:nth-child(odd):before {
    content: '';
    position: absolute;
    height: 150px;
    width: 10px;
    background-color: var(--color-secondary);
    bottom: -150px;
  }

  &:after {
    content: '';
    position: absolute;
    margin: 0 calc(50% - 20px);
    height: 10px;
    bottom: 0;
    width: 40px;
    background-color: var(--color-secondary);
  }

  &:nth-child(odd):after {
    margin-bottom: -150px;
  }
`;

export const CardTimelineStyles = {
  Container,
  Line,
};
