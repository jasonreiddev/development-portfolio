import { ChangeEventHandler, FunctionComponent } from 'react';
import { MdChevronRight } from 'react-icons/md';

import { SelectStyles } from './Select.styles';
// import { getDisplayedValue } from './Select.helpers';

export type SelectProps = {
  value?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  string?: string;
};

const Select: FunctionComponent<SelectProps> = ({ value, onChange, children }): JSX.Element => {
  const displayedValue = 'Test'; //getDisplayedValue(value, children);

  return (
    <SelectStyles.Wrapper>
      <SelectStyles.NativeSelect value={value} onChange={onChange}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        {children}
      </SelectStyles.NativeSelect>
      <SelectStyles.PresentationalBit>
        {displayedValue}
        <SelectStyles.IconWrapper>
          <MdChevronRight />
        </SelectStyles.IconWrapper>
      </SelectStyles.PresentationalBit>
    </SelectStyles.Wrapper>
  );
};

export default Select;
