import { TextCardStyles } from './TextCard.styles';

interface FooterCardProps {
  text?: string;
  children?: JSX.Element;
}

export const TextCard = ({ text, children }: FooterCardProps): JSX.Element => {
  return (
    <TextCardStyles>
      {text}
      {text && children && <br />}
      {children}
    </TextCardStyles>
  );
};
