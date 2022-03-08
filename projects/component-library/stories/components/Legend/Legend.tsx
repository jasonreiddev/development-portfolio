import { LegendStyles as s } from './Legend.styles';

export type LegendProps = {
  level: 'Primary' | 'Secondary' | 'Tertiary';
};

export const Legend = (): JSX.Element => {
  return (
    <s.Container>
      <s.LegendPair>
        <s.Key level={'Primary'}></s.Key>
        <s.Title>Primary</s.Title>
      </s.LegendPair>

      <s.LegendPair>
        <s.Key level={'Secondary'}></s.Key>
        <s.Title> &lt; Secondary</s.Title>
      </s.LegendPair>

      <s.LegendPair>
        <s.Key level={'Tertiary'}></s.Key>
        <s.Title>&lt; Tertiary</s.Title>
      </s.LegendPair>
    </s.Container>
  );
};