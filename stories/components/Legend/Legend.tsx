import { FunctionComponent } from 'react';
import { LegendStyles } from './Legend.styles';

export type Props = {
  level: 'Primary' | 'Secondary' | 'Tertiary';
};

const Legend: FunctionComponent = () => {
  return (
    <LegendStyles.Container>
      <LegendStyles.LegendPair>
        <LegendStyles.Key level={'Primary'}></LegendStyles.Key>
        <LegendStyles.Title>Primary</LegendStyles.Title>
      </LegendStyles.LegendPair>

      <LegendStyles.LegendPair>
        <LegendStyles.Key level={'Secondary'}></LegendStyles.Key>
        <LegendStyles.Title> &lt; Secondary</LegendStyles.Title>
      </LegendStyles.LegendPair>

      <LegendStyles.LegendPair>
        <LegendStyles.Key level={'Tertiary'}></LegendStyles.Key>
        <LegendStyles.Title>&lt; Tertiary</LegendStyles.Title>
      </LegendStyles.LegendPair>
    </LegendStyles.Container>
  );
};

export default Legend;
