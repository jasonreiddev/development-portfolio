import { InputFieldStyles as s } from './InputField.styles';
import { ColorPair } from 'helpers/media';

export interface InputFieldProps {
  title?: string;
  name: string;
  placeholder?: string;
  type?: string;
  callback?(value: string): void;
  onClick?(): void;
  colorPair?: ColorPair;
}

export const InputField = ({
  title,
  name,
  placeholder,
  type = 'Text',
  callback,
  onClick,
  colorPair = ColorPair.Secondary,
}: InputFieldProps): JSX.Element => {
  return (
    <s.Container>
      {!!title && <s.Title>{title}</s.Title>}
      <s.Input colorPair={colorPair}>
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
