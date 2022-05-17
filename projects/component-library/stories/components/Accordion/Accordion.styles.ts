import styled from 'styled-components';

import { ColorPair, useColorPair } from '../../../../helpers/media';

interface AccordionStylesProps {
  active?: boolean;
  colorPair?: ColorPair;
}

const Wrapper = styled.div`
  font-size: 1rem;
  color: hsl(0deg 0% 25%);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  background: transparent;
  margin: 0 26px;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
`;

const Title = styled.button<AccordionStylesProps>`
  color: var(--color-contrast);
  cursor: pointer;
  padding: 12px 16px;
  outline-offset: 5px;
  background-color: var(--color-secondary);
  width: 100%;
  border: 0;
  border-radius: var(--border-radius);
  font-weight: bold;
  font-size: 14pt;

  ${(p: AccordionStylesProps) => useColorPair(p.colorPair, '10pt')}
`;

const Content = styled.div<AccordionStylesProps>`
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  padding: 26px 8px 8px;
  margin: -16px 0 0;

  ${(p) => (p.active ? ` display: block;` : `  display: none;`)}
  ${(p: AccordionStylesProps) => useColorPair(p.colorPair, '10pt')}
`;

export const AccordionStyles = {
  Wrapper,
  Title,
  Content,
};
