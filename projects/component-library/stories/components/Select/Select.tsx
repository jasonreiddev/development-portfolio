import { ChangeEventHandler } from 'react';
import { MdChevronRight } from 'react-icons/md';

import { SelectStyles as s } from './Select.styles';

export type SelectProps = {
  value?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  children?: JSX.Element | string;
};

export const Select = ({ value, onChange, children }: SelectProps): JSX.Element => {
  const displayedValue = 'Test';

  return (
    <s.Wrapper>
      <s.NativeSelect value={value} onChange={onChange}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        {children}
      </s.NativeSelect>
      <s.PresentationalBit>
        {displayedValue}
        <s.IconWrapper>
          <MdChevronRight />
        </s.IconWrapper>
      </s.PresentationalBit>
    </s.Wrapper>
  );
};
