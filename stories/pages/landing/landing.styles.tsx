import styled from 'styled-components';

export const Wrapper = styled.article`
  font-size: 14px;
  line-height: 24px;
  padding: 48px 20px;
  margin: 0 auto;
  max-width: 600px;
  background-color: var(--color-base);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

export const Title = styled.article`
  font-weight: 900;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
`;

export const Text = styled.article`
  margin: 1em 0;
`;

export const LandingStyles = {
  Wrapper,
  Title,
  Text,
};
