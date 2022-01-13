import styled from 'styled-components';

export const FrequentlyAskedQuestionStyles = styled.details`
  font-size: 1rem;
  color: hsl(0deg 0% 25%);
  margin: 32px;
  border: 2px solid;
  border-radius: var(--border-radius);

  summary {
    cursor: pointer;
    padding: 12px 16px;
    outline-offset: 5px;
  }

  .answer {
    background: hsl(0deg 0% 92.5%);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    padding: 12px 17px;
    font-style: italic;
  }
`;
