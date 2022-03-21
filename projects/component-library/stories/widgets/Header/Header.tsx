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
          {menuLinks.map((link) => {
            let active = false;
            if (typeof window !== 'undefined') {
              console.log(link.link);
              active = location.pathname == link.link;
              console.log('🚀 ~ file: Header.tsx ~ line 51 ~ {menuLinks.map ~ active', active);
            }
            return (
              <li key={link.name}>
                <s.MenuLink href={link.link} active={active}>
                  {link.name ? link.name : link.name}
                </s.MenuLink>
              </li>
            );
          })}
          <li>
            <ToggleDarkMode />
          </li>
        </s.MenuItems>
      </nav>
    </s.Wrapper>
  );
};
