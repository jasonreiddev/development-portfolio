import { ColorPair } from '../../../../helpers/media';
import { TextCardStyles as s } from './TextCard.styles';

export interface TextCardProps {
  text?: string;
  children?: JSX.Element | string;
  fitContent?: boolean;
  colorPair?: ColorPair;
}

export const TextCard = ({
  text,
  children,
  fitContent = true,
  colorPair,
}: TextCardProps): JSX.Element => {
  return (
    <s.Wrapper fitContent={fitContent} colorPair={colorPair}>
      {text && <s.Title>{text}</s.Title>}
      {children}
    </s.Wrapper>
  );
};
