import { ColorPalletStyles as s } from './ColorPallet.styles';
import { ColorPair, getColorPairing } from '../../../../helpers/media';
import { TextCard } from '../../widgets/TextCard/TextCard';

export const ColorPairings = (): JSX.Element => {
  return (
    <s.Wrapper>
      {(Object.keys(ColorPair) as Array<keyof typeof ColorPair>)
        .filter((colorPair) => isNaN(parseInt(colorPair)))
        .map((colorPair) => (
          <TextCard colorPair={ColorPair[colorPair]} key={colorPair}>
            {`${colorPair} - (${getColorPairing(ColorPair[colorPair]).accessible})`}
          </TextCard>
        ))}
    </s.Wrapper>
  );
};
