import { FunctionComponent } from 'react';
import { InputFieldStyles } from './InputField.styles';

export type InputFieldProps = {
  title?: string;
  name: string;
  placeholder?: string;
  type: string;
  callback?(value: string): void;
};

const InputField: FunctionComponent<InputFieldProps> = ({
  title,
  name,
  placeholder,
  type,
  callback,
}) => {
  return (
    <InputFieldStyles.Container>
      {!!title && <InputFieldStyles.Title>{title}</InputFieldStyles.Title>}
      <InputFieldStyles.Input>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={(e) => {
            callback && callback(e.target.value);
          }}
        />
      </InputFieldStyles.Input>
    </InputFieldStyles.Container>
  );
};

export default InputField;
