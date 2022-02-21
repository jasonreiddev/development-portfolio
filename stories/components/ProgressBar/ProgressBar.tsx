import { FunctionComponent } from 'react';

import { ProgressBarStyles as s } from './ProgressBar.styles';

export type ProgressBarProps = {
  progress?: number;
  total?: number;
};

const ProgressBar: FunctionComponent<ProgressBarProps> = ({ progress = 0, total = 100 }) => {
  const getProgress = (): number => Math.round((progress / total) * 100);
  return (
    <s.Container>
      <span>{getProgress()}% Complete</span>
      <s.Bar>
        <s.Progress Progress={getProgress()} />
      </s.Bar>
    </s.Container>
  );
};

export default ProgressBar;
