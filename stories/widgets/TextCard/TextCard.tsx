import { TextCardStyles as s } from './TextCard.styles';

interface FooterCardProps {
  text?: string;
  children?: JSX.Element;
  fitContent?: boolean;
}

export const TextCard = ({ text, children, fitContent = true }: FooterCardProps): JSX.Element => {
  return (
    <s.Wrapper fitContent={fitContent}>
      {text && <s.Title>{text}</s.Title>}
      {children}
    </s.Wrapper>
  );
};
