import { TextCardStyles } from './TextCard.styles';

interface FooterCardProps {
  text?: string;
  children?: JSX.Element;
  fitContent?: boolean;
}

export const TextCard = ({ text, children, fitContent = true }: FooterCardProps): JSX.Element => {
  return (
    <TextCardStyles fitContent={fitContent}>
      {text && <h2>{text}</h2>}
      {children}
    </TextCardStyles>
  );
};
