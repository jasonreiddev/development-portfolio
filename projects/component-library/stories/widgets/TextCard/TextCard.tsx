import { TextCardStyles as s } from './TextCard.styles';

export interface TextCardProps {
  text?: string;
  children?: JSX.Element | string;
  fitContent?: boolean;
}

export const TextCard = ({ text, children, fitContent = true }: TextCardProps): JSX.Element => {
  return (
    <s.Wrapper fitContent={fitContent}>
      {text && <s.Title>{text}</s.Title>}
      {children}
    </s.Wrapper>
  );
};
