import styled from 'styled-components';

interface ProgressBarStylesProps {
  Progress: number;
}

const Container = styled.div`
  text-align: center;
  min-width: 125px;
`;

const Bar = styled.div`
  height: 2em;
  width: 100%;
  max-width: 200px;
  border: 1px solid var(--color-black);
  background-color: var(--color-white-bright);
  margin: auto;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const Progress = styled.div<ProgressBarStylesProps>`
  height: inherit;
  width: ${(p: ProgressBarStylesProps) => (p.Progress ? `${p.Progress}%;` : '0%')};
  background-color: var(--color-secondary);
`;

export const ProgressBarStyles = {
  Container,
  Bar,
  Progress,
};
