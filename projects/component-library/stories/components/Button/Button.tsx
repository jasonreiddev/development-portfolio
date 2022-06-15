import Router from 'next/router';
import { MdLink } from 'react-icons/md';

import { ButtonStyles as s } from './Button.styles';
import { ColorPair } from '../../../../helpers/media';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset' | undefined;
  label: string;
  url?: string;
  colorPair?: ColorPair;
  onClick?: () => void;
}

export const Button = ({
  size = 'medium',
  type = 'button',
  label,
  url,
  colorPair,
  onClick,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <s.Wrapper>
      <s.Button
        type={type}
        size={size}
        colorPair={colorPair}
        onClick={() => {
          if (url != undefined) {
            Router.push(url);
          } else {
            onClick && onClick();
          }
        }}
        {...props}
      >
        {!!url && <MdLink />}
        {label}
      </s.Button>
    </s.Wrapper>
  );
};
