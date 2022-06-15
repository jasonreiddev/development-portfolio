import { ColorPair } from '../../../../helpers/media';
import { BlurredGlowStyles as s } from './BlurredGlow.styles';

export interface BlurredGlowProps {
  colorPair?: ColorPair;
}

export const BlurredGlow = ({ colorPair }: BlurredGlowProps): JSX.Element => {
  return (
    <s.Wrapper>
      <s.Blurred colorPair={colorPair} />
      <s.Content colorPair={colorPair} />
    </s.Wrapper>
  );
};
