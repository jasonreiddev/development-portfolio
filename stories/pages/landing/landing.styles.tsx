import styled from 'styled-components';

export const LandingStyles = styled.article`
  section {
    font-size: 14px;
    line-height: 24px;
    padding: 48px 20px;
    margin: 0 auto;
    max-width: 600px;
    background-color: var(--color-white);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }

  section h1 {
    font-weight: 900;
    font-size: 32px;
    line-height: 1;
    margin: 0 0 4px;
    display: inline-block;
    vertical-align: top;
  }

  section p {
    margin: 1em 0;
  }
`;
