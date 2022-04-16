import { RisingTextStyles as s } from './RisingText.styles';

export interface RisingTextProps {
  text: string;
  color?: string;
}

export const RisingText = ({ text, color }: RisingTextProps): JSX.Element => {
  return (
    <s.Wrapper>
      <s.Text>{text}</s.Text>
      <s.RisingText color={color}>{text}</s.RisingText>
    </s.Wrapper>
  );
};
