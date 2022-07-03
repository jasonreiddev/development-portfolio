import { ChangeEventHandler } from 'react';
import { MdChevronRight } from 'react-icons/md';

import { SelectStyles as s } from './Select.styles';
import { ColorPair } from 'helpers/media';

export interface SelectProps {
  value?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options?: string[];
  colorPair?: ColorPair;
}

export const Select = ({
  value,
  onChange,
  options = [],
  colorPair = ColorPair.Secondary,
}: SelectProps): JSX.Element => {
  const displayedValue = 'Test';

  return (
    <s.Wrapper>
      <s.NativeSelect value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </s.NativeSelect>
      <s.PresentationalBit colorPair={colorPair}>
        {displayedValue}
        <s.IconWrapper>
          <MdChevronRight />
        </s.IconWrapper>
      </s.PresentationalBit>
    </s.Wrapper>
  );
};
