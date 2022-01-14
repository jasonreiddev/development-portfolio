import styled from 'styled-components';

interface TextCardStylesProps {
  fitContent?: boolean;
}

export const TextCardStyles = styled.div<TextCardStylesProps>`
  margin: 20px;
  padding: 20px;
  border-radius: var(--border-radius);
  background: var(--color-white);
  box-shadow: var(--box-shadow);
  ${(p: TextCardStylesProps) => (p.fitContent ? `width: fit-content;` : null)};

  h1 {
    font-weight: 900;
    font-size: 32px;
    line-height: 1;
    margin: 0 0 4px;
    display: inline-block;
    vertical-align: top;
  }
`;
