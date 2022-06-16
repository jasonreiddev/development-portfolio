import { RisingTextStyles as s } from './RisingText.styles';
import { ColorPair } from '../../../../helpers/media';

export interface RisingTextProps {
  text: string;
  colorPair?: ColorPair;
}

export const RisingText = ({
  text,
  colorPair = ColorPair.Secondary,
}: RisingTextProps): JSX.Element => {
  return (
    <s.Wrapper>
      <s.Text>{text}</s.Text>
      <s.RisingText colorPair={colorPair}>{text}</s.RisingText>
    </s.Wrapper>
  );
};
