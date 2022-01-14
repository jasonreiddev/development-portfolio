import { TextCardStyles } from './TextCard.styles';

interface FooterCardProps {
  text?: string;
  children?: JSX.Element;
  fitContent?: boolean;
}

export const TextCard = ({ text, children, fitContent }: FooterCardProps): JSX.Element => {
  return (
    <TextCardStyles fitContent={fitContent}>
      <h2>{text}</h2>
      {children}
    </TextCardStyles>
  );
};
