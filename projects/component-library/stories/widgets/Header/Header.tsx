import { ToggleDarkMode } from '../../../../helpers/layoutContext';
import { Button } from '../../components/Button/Button';

import { HeaderStyles as s } from './Header.styles';

export interface Links {
  name: string;
  link: string;
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
  menuLinks,
  title,
}: HeaderProps): JSX.Element => {
  return (
    <s.Wrapper>
      <s.Title>{title}</s.Title>
      {(user || onLogin || onCreateAccount) && (
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
      )}
      <nav>
        <s.MenuItems>
          {menuLinks.map((link) => (
            <li key={link.name}>
              <a className={link.name == title ? 'active' : ''} href={link.link}>
                {link.name ? link.name : link.name}
              </a>
            </li>
          ))}
          <li>
            <ToggleDarkMode />
          </li>
        </s.MenuItems>
      </nav>
    </s.Wrapper>
  );
};
