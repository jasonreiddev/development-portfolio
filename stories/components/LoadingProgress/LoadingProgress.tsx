import { FunctionComponent } from 'react';
import { LoadingProgressStyles as s } from './LoadingProgress.styles';

export type LoadingProgressProps = {
  progress: number;
  total: number;
  log: Array<string>;
};

const LoadingProgress: FunctionComponent<LoadingProgressProps> = ({ progress, total, log }) => {
  const getProgress = (): number => Math.round((progress / total) * 100);
  return (
    <s.Container>
      <s.Spinner />
      <s.Loading>Loading Timebanks....</s.Loading>
      <s.Progress>
        <span>{getProgress()}%</span>
      </s.Progress>
      <s.Log>
        {getProgress() === 100 && <span>Done.</span>}
        {log.map((entry, i) => (
          <span key={'entry_' + i}>{entry}</span>
        ))}
      </s.Log>
    </s.Container>
  );
};

export default LoadingProgress;
