import { ProgressBarStyles as s } from './ProgressBar.styles';
import { ColorPair } from 'helpers/media';

export interface ProgressBarProps {
  progress?: number;
  total?: number;
  colorPair?: ColorPair;
}

export const ProgressBar = ({
  progress = 0,
  total = 100,
  colorPair = ColorPair.Secondary,
}: ProgressBarProps): JSX.Element => {
  const getProgress = (): number => Math.round((progress / total) * 100);
  return (
    <s.Container>
      <span>{getProgress()}% Complete</span>
      <s.Bar colorPair={colorPair}>
        <s.Progress Progress={getProgress()} colorPair={colorPair} />
      </s.Bar>
    </s.Container>
  );
};
