import styled from 'styled-components';

export const HeaderStyles = styled.header`
  .wrapper {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    background: var(--color-white);
    box-shadow: var(--box-shadow);
  }

  svg {
    display: inline-block;
    vertical-align: top;
  }

  h1 {
    font-weight: 900;
    --font-multiplier: 1.5;
    font-size: clamp(
      1rem * var(--font-multiplier),
      1vw + 1rem * var(--font-multiplier),
      2rem * var(--font-multiplier)
    );
    line-height: 1;
    margin: 6px 0 6px 10px;
    display: inline-block;
    vertical-align: top;
  }

  button + button {
    margin-left: 10px;
  }
`;
