import { PlanetStyles as s } from './Planet.styles';
import { ColorPair } from '../../../../helpers/media';

export interface PlanetProps {
  colorPair?: ColorPair;
  colorPairMoon?: ColorPair;
}

export const Planet = ({
  colorPair = ColorPair.Secondary,
  colorPairMoon = ColorPair.Tertiary,
}: PlanetProps): JSX.Element => {
  return (
    <s.Wrapper>
      <s.Planet colorPair={colorPair} />
      <s.Moon colorPair={colorPairMoon} />
    </s.Wrapper>
  );
};
