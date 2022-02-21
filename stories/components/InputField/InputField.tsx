import { FunctionComponent } from 'react';

import { InputFieldStyles as s } from './InputField.styles';

export type InputFieldProps = {
  title?: string;
  name: string;
  placeholder?: string;
  type?: string;
  callback?(value: string): void;
  onClick?(): void;
};

const InputField: FunctionComponent<InputFieldProps> = ({
  title,
  name,
  placeholder,
  type = 'Text',
  callback,
  onClick,
}) => {
  return (
    <s.Container>
      {!!title && <s.Title>{title}</s.Title>}
      <s.Input>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={(e) => {
            callback && callback(e.target.value);
          }}
          onClick={onClick}
        />
      </s.Input>
    </s.Container>
  );
};

export default InputField;
