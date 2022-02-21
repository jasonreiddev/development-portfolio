import { CustomKerningStyles as s } from './ClampText.styles';

export interface CustomKerningProps {
  text: string;
  lines: number;
}

export const ClampText = ({ text, lines }: CustomKerningProps): JSX.Element => {
  return (
    <s.Wrapper>
      <s.ClampText lines={lines}>{text}</s.ClampText>
    </s.Wrapper>
  );
};
