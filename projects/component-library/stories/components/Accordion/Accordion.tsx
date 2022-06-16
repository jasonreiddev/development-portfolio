import { useState } from 'react';

import { ColorPair } from '../../../../helpers/media';
import { AccordionStyles as s } from './Accordion.styles';

export interface AccordionProps {
  title: string;
  active?: boolean;
  children: JSX.Element | string;
  colorPair?: ColorPair;
  colorPairContent?: ColorPair;
}

export const Accordion = ({
  title,
  active = false,
  children,
  colorPair = ColorPair.Secondary,
  colorPairContent = ColorPair.Default,
}: AccordionProps): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(active);

  return (
    <s.Wrapper>
      <s.Title onClick={() => setIsActive(!isActive)} colorPair={colorPair}>
        {title}
      </s.Title>
      <s.Content active={isActive} colorPair={colorPairContent}>
        {children}
      </s.Content>
    </s.Wrapper>
  );
};
