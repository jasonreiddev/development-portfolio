import { BlurredGlowStyles as s } from './BlurredGlow.styles';

export const BlurredGlow = (): JSX.Element => {
  return (
    <s.Wrapper>
      <s.Blurred />
      <s.Content />
    </s.Wrapper>
  );
};
