import { FunctionComponent } from 'react';
import { LoadingProgressStyles } from './LoadingProgress.styles';

export type LoadingProgressProps = {
  progress: number;
  total: number;
  log: Array<string>;
};

const LoadingProgress: FunctionComponent<LoadingProgressProps> = ({ progress, total, log }) => {
  const getProgress = (): number => Math.round((progress / total) * 100);
  return (
    <LoadingProgressStyles.Container>
      <LoadingProgressStyles.Spinner /*TODO Spinner*/ />
      <LoadingProgressStyles.Loading>Loading Timebanks....</LoadingProgressStyles.Loading>
      <LoadingProgressStyles.Progress>
        <span>{getProgress()}%</span>
      </LoadingProgressStyles.Progress>
      <LoadingProgressStyles.Log>
        {getProgress() === 100 && <span>Done.</span>}
        {log.map((entry, i) => (
          <span key={'entry_' + i}>{entry}</span>
        ))}
      </LoadingProgressStyles.Log>
    </LoadingProgressStyles.Container>
  );
};

export default LoadingProgress;
