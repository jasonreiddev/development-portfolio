import styled from 'styled-components';

import { ColorPair, useBase, useContrast } from 'helpers/media';

interface ProgressBarStylesProps {
  Progress?: number;
  colorPair?: ColorPair;
}

const Container = styled.div`
  text-align: center;
  min-width: 125px;
`;

const Bar = styled.div<ProgressBarStylesProps>`
  height: 2em;
  width: 100%;
  max-width: 200px;
  border: 1px solid ${(p: ProgressBarStylesProps) => useBase(p.colorPair)};
  background-color: ${(p: ProgressBarStylesProps) => useContrast(p.colorPair)};
  margin: auto;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const Progress = styled.div<ProgressBarStylesProps>`
  height: inherit;
  width: ${(p: ProgressBarStylesProps) => (p.Progress ? `${p.Progress}%;` : '0%')};
  background-color: ${(p: ProgressBarStylesProps) => useBase(p.colorPair)};
`;

export const ProgressBarStyles = {
  Container,
  Bar,
  Progress,
};
