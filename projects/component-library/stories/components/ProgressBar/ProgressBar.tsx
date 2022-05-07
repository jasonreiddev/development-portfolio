import { ProgressBarStyles as s } from './ProgressBar.styles';

export interface ProgressBarProps {
  progress?: number;
  total?: number;
}

export const ProgressBar = ({ progress = 0, total = 100 }: ProgressBarProps): JSX.Element => {
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
