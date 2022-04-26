import Router from 'next/router';
import { MdLink } from 'react-icons/md';
import { ButtonStyles as s } from './Button.styles';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset' | undefined;
  label: string;
  url?: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  type = 'button',
  backgroundColor,
  label,
  url,
  onClick,
  ...props
}: ButtonProps): JSX.Element => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <s.Wrapper>
      <s.Button
        type={type}
        className={[`${size}`, mode].join(' ')}
        backgroundColor={backgroundColor}
        {...props}
        onClick={() => {
          if (url != undefined) {
            Router.push(url);
          } else {
            onClick && onClick();
          }
        }}
      >
        {!!url && <MdLink />}
        {label}
      </s.Button>
    </s.Wrapper>
  );
};
