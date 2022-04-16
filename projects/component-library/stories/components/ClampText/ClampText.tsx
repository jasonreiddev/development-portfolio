import { ClampTextStyles as s } from './ClampText.styles';

export interface ClampTextProps {
  text: string;
  lines: number;
}

export const ClampText = ({ text, lines }: ClampTextProps): JSX.Element => {
  return (
    <s.Wrapper>
      <s.ClampText lines={lines}>{text}</s.ClampText>
    </s.Wrapper>
  );
};
