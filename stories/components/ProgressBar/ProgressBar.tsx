import { FunctionComponent } from 'react';
import { ProgressBarStyles } from './ProgressBar.styles';

export type ProgressBarProps = {
  progress?: number;
  total?: number;
};

const ProgressBar: FunctionComponent<ProgressBarProps> = ({ progress = 0, total = 100 }) => {
  const getProgress = (): number => Math.round((progress / total) * 100);
  return (
    <ProgressBarStyles.Container>
      <span>{getProgress()}% Complete</span>
      <ProgressBarStyles.Bar>
        <ProgressBarStyles.Progress Progress={getProgress()} />
      </ProgressBarStyles.Bar>
    </ProgressBarStyles.Container>
  );
};

export default ProgressBar;
