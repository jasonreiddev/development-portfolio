import { PlanetStyles as s } from './Planet.styles';

export const Planet = (): JSX.Element => {
  return (
    <s.Wrapper>
      <s.Planet />
      <s.Moon />
    </s.Wrapper>
  );
};
