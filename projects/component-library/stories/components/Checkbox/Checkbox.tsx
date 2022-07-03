import { MdCheck } from 'react-icons/md';

import { CheckboxStyles as s } from './Checkbox.styles';
import { ColorPair } from 'helpers/media';

export interface CheckboxProps {
  label: string;
  checked?: boolean;
  handleChange: () => void;
  colorPair?: ColorPair;
}

export const Checkbox = ({
  label,
  checked,
  handleChange,
  colorPair = ColorPair.Secondary,
}: CheckboxProps): JSX.Element => {
  return (
    <s.Wrapper onClick={() => handleChange()}>
      <s.HiddenCheckbox checked={checked} />
      <s.StyledCheckbox checked={checked} colorPair={colorPair}>
        <MdCheck />
      </s.StyledCheckbox>
      {label}
    </s.Wrapper>
  );
};
