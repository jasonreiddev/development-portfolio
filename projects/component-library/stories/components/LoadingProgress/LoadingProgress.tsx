import { LoadingProgressStyles as s } from './LoadingProgress.styles';

export interface LoadingProgressProps {
  progress: number;
  total: number;
  log: Array<string>;
}

export const LoadingProgress = ({ progress, total, log }: LoadingProgressProps): JSX.Element => {
  const getProgress = (): number => Math.round((progress / total) * 100);
  return (
    <s.Container>
      <s.Spinner />
      <s.Loading>Loading Timebanks....</s.Loading>
      {progress && total && (
        <s.Progress>
          <span>{getProgress()}%</span>
        </s.Progress>
      )}
      <s.Log>
        {getProgress() === 100 && <span>Done.</span>}
        {log && log.map((entry, i) => <span key={'entry_' + i}>{entry}</span>)}
      </s.Log>
    </s.Container>
  );
};
