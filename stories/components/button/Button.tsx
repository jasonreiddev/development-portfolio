import { ButtonStyles as s } from './Button.styles';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset' | undefined;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  type = 'button',
  backgroundColor,
  label,
  ...props
}: ButtonProps): JSX.Element => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <s.Button
      type={type}
      className={[`${size}`, mode].join(' ')}
      backgroundColor={backgroundColor}
      {...props}
    >
      {label}
    </s.Button>
  );
};
