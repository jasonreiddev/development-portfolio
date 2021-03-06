import { TextStyles as s } from './SmallText.styles';

export interface SmallTextProps {
  text?: string;
}

export const SmallText = ({ text }: SmallTextProps): JSX.Element => {
  return <s.Text>{text}</s.Text>;
};
