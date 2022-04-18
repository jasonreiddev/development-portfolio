import { ToggleDarkMode } from '../../../../helpers/layoutContext';
import { Button } from '../../components/Button/Button';
import { RisingText } from '../../components/RisingText/RisingText';

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
      <s.Title href="/">
        <h1>{title}</h1>
      </s.Title>

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
            if (
              typeof window !== 'undefined' &&
              (location.pathname == link.link || location.pathname.startsWith(`${link.link}/`))
            ) {
              return (
                <li>
                  <s.MenuLink href={link.link}>
                    <s.MenuActive>{link.name}</s.MenuActive>
                  </s.MenuLink>
                </li>
              );
            }
            return (
              <li key={link.name}>
                <s.MenuLink href={link.link}>
                  <RisingText text={link.name} color={'var(--color-contrast)'} />
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
