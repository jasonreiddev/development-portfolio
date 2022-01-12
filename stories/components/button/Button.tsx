import { ButtonStyles } from './Button.styles';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps): JSX.Element => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <ButtonStyles
      type="button"
      className={[`${size}`, mode].join(' ')}
      backgroundColor={backgroundColor}
      {...props}
    >
      {console.log('🚀 ~ file: Button.tsx ~ line 24 ~ backgroundColor', backgroundColor)}
      {label}
    </ButtonStyles>
  );
};
