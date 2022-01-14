import { TextStyles } from './SmallText.styles';

interface SmallTextProps {
  text?: string;
}

export const SmallText = ({ text }: SmallTextProps) => {
  return <TextStyles>{text}</TextStyles>;
};
