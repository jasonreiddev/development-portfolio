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
      <button type="submit">Log In</button>
    </LoginFormStyles>
  );
};
