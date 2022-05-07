import { MdCheck } from 'react-icons/md';
import { CheckboxStyles as s } from './Checkbox.styles';

export interface CheckboxProps {
  label: string;
  checked?: boolean;
  handleChange: () => void;
}

export const Checkbox = ({ label, checked, handleChange }: CheckboxProps): JSX.Element => {
  return (
    <s.Wrapper onClick={() => handleChange()}>
      <s.HiddenCheckbox checked={checked} />
      <s.StyledCheckbox checked={checked}>
        <MdCheck />
      </s.StyledCheckbox>
      {label}
    </s.Wrapper>
  );
};
