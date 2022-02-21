import styled from 'styled-components';

interface TextCardStylesProps {
  fitContent?: boolean;
}

const Wrapper = styled.div<TextCardStylesProps>`
  margin: 20px;
  padding: 20px;
  border-radius: var(--border-radius);
  background: var(--color-white);
  box-shadow: var(--box-shadow);
  ${(p: TextCardStylesProps) => (p.fitContent ? `width: fit-content;` : null)};
`;

const Title = styled.h1<TextCardStylesProps>`
  font-weight: 900;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
`;

export const TextCardStyles = {
  Wrapper,
  Title,
};
