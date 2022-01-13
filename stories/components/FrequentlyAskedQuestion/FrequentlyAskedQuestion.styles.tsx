import styled from 'styled-components';

export const FrequentlyAskedQuestionStyles = styled.details`
  font-size: 1rem;
  color: hsl(0deg 0% 25%);
  margin: 32px;

  border-radius: 0 0 var(--border-radius) var(--border-radius);
  box-shadow: var(--box-shadow);

  summary {
    cursor: pointer;
    padding: 12px 16px;
    outline-offset: 5px;
    background-color: var(--color-white);
    box-shadow: var(--box-shadow);
  }

  .answer {
    background: var(--color-primary);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    padding: 12px 17px;
    font-style: italic;
  }
`;