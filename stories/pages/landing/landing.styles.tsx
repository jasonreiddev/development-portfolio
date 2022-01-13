import styled from 'styled-components';

export const LandingStyles = styled.article`
  section {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 24px;
    padding: 48px 20px;
    margin: 0 auto;
    max-width: 600px;
    color: #333;
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

  section a {
    text-decoration: none;
    color: #1ea7fd;
  }

  section ul {
    padding-left: 30px;
    margin: 1em 0;
  }

  section li {
    margin-bottom: 8px;
  }

  section .tip {
    display: inline-block;
    border-radius: var(--border-radius);
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #e7fdd8;
    color: #66bf3c;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  section .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  section .tip-wrapper svg {
    display: inline-block;
    height: 12px;
    width: 12px;
    margin-right: 4px;
    vertical-align: top;
    margin-top: 3px;
  }

  section .tip-wrapper svg path {
    fill: #1ea7fd;
  }
`;
