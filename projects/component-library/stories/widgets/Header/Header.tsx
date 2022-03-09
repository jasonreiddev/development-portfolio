import { Button } from '../../components/Button/Button';

import { HeaderStyles as s } from './Header.styles';

export interface Links {
  name: string;
  link: string;
  nameOverrideNav?: string;
}

export interface HeaderProps {
  user?: Record<string, never>;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  menuLinks: Links[];
  title?: string;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  title,
}: HeaderProps): JSX.Element => {
  return (
    <s.Wrapper>
      <s.Title>{title}</s.Title>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </s.Wrapper>
  );
};
