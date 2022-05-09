import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1rem;
  color: hsl(0deg 0% 25%);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  background: transparent;
  margin: 0 26px;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
`;

const Title = styled.button`
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
`;

const Content = styled.div<{ active?: boolean }>`
  background-color: var(--color-secondary-ld-max);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  padding: 26px 8px 8px;
  margin: -16px 0 0;

  ${(p) => (p.active ? ` display: block;` : `  display: none;`)}
`;

export const AccordionStyles = {
  Wrapper,
  Title,
  Content,
};
