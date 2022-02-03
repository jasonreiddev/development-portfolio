import styled from 'styled-components';

export const HelloWorldStyles = styled.article`
  h2 {
    --font-multiplier: 1.125;
    font-size: clamp(
      1rem * var(--font-multiplier),
      1vw + 1rem * var(--font-multiplier),
      2rem * var(--font-multiplier)
    );
    font-weight: 900;
    line-height: 1;
    margin: 0 0 4px;
    display: inline-block;
    vertical-align: top;
  }
`;
