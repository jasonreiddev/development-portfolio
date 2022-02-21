import { FunctionComponent } from 'react';

import { LegendStyles as s } from './Legend.styles';

export type Props = {
  level: 'Primary' | 'Secondary' | 'Tertiary';
};

const Legend: FunctionComponent = () => {
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

export default Legend;
