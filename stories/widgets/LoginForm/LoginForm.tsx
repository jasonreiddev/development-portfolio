import { Button } from '../../components/Button/Button';
import { TextCard } from '../TextCard/TextCard';
import { LoginFormStyles as s } from './LoginForm.styles';

export interface LoginFormProps {
  placeHolder?: string;
  type?: string;
  PasswordPlaceHolder?: string;
  showPassword?: boolean;
  handleSubmit?: () => void;
}

export const LoginForm = ({
  placeHolder = 'me@you.com',
  type = 'email',
  PasswordPlaceHolder = 'Enter your password',
  showPassword = false,
  handleSubmit,
}: LoginFormProps): JSX.Element => {
  return (
    <TextCard text="Log in" fitContent={true}>
      <form id="login-form" onSubmit={handleSubmit}>
        <s.Label>
          Email:
          <s.Input className="input" placeholder={placeHolder} type={type} />
        </s.Label>
        <s.Label>
          Password:
          <s.Input
            className="input"
            placeholder={PasswordPlaceHolder}
            type={showPassword ? 'text' : 'password'}
          />
        </s.Label>
        <s.ButtonWrapper>
          <Button type="submit" label="Log In" />
        </s.ButtonWrapper>
      </form>
    </TextCard>
  );
};
