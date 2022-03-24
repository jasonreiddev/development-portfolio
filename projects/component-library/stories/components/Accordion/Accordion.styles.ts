import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1rem;
  color: hsl(0deg 0% 25%);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  background: transparent;
`;

const Title = styled.button`
  color: var(--color-contrast);
  cursor: pointer;
  padding: 12px 16px;
  outline-offset: 5px;
  background-color: var(--color-secondary);
  box-shadow: var(--box-shadow);
  width: 100%;
  border: 0;
  border-radius: var(--border-radius);
`;

const Content = styled.div<{ active?: boolean }>`
  background: var(--color-primary);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  padding: 12px 17px;
  margin: 0 10px;

  ${(p) => (p.active ? ` display: block;` : `  display: none;`)}
`;

export const AccordionStyles = {
  Wrapper,
  Title,
  Content,
};
