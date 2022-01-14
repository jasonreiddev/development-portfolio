import { Button } from '../../components/Button/Button';
import { TextCard } from '../TextCard/TextCard';
import { LoginFormStyles } from './LoginForm.styles';

export interface LoginFormProps {
  placeHolder: string;
  type: string;
  PasswordPlaceHolder: string;
  showPassword: boolean;
  handleSubmit: () => void;
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
      <LoginFormStyles id="login-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input className="input" placeholder={placeHolder} type={type} />
        </label>
        <label>
          Password:
          <input
            className="input"
            placeholder={PasswordPlaceHolder}
            type={showPassword ? 'text' : 'password'}
          />
        </label>
        <Button type="submit" label="Log In" />
      </LoginFormStyles>
    </TextCard>
  );
};
