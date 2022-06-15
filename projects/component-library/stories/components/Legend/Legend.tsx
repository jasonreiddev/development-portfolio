import { LegendStyles as s } from './Legend.styles';

export interface LegendProps {
  level: 'Primary' | 'Secondary' | 'Tertiary';
}

export const Legend = (): JSX.Element => {
  return (
    <s.Container>
      <s.LegendPair>
        <s.Key level={'Primary'}></s.Key>
        <s.Title>Primary</s.Title>
      </s.LegendPair>

      <s.LegendPair>
        <s.Key level={'Secondary'}></s.Key>
        <s.Title>Secondary</s.Title>
      </s.LegendPair>

      <s.LegendPair>
        <s.Key level={'Tertiary'}></s.Key>
        <s.Title>Tertiary</s.Title>
      </s.LegendPair>
    </s.Container>
  );
};
