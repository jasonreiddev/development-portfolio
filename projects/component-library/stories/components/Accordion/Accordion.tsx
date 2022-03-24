import { useState } from 'react';
import { AccordionStyles as s } from './Accordion.styles';

export interface AccordionProps {
  title: string;
  active?: boolean;
  children: JSX.Element | string;
}

export const Accordion = ({ title, active = false, children }: AccordionProps): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(active);

  return (
    <s.Wrapper>
      <s.Title onClick={() => setIsActive(!isActive)}>{title}</s.Title>
      <s.Content active={isActive}>{children}</s.Content>
    </s.Wrapper>
  );
};
