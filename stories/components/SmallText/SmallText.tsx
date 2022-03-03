import { TextStyles as s } from './SmallText.styles';

interface SmallTextProps {
  text?: string;
}

export const SmallText = ({ text }: SmallTextProps): JSX.Element => {
  return <s.Text>{text}</s.Text>;
};
