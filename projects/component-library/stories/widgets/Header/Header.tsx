import Link from 'next/link';
import { ColorPair } from '../../../../helpers/media';

import { Button } from '../../components/Button/Button';
import { RisingText } from '../../components/RisingText/RisingText';

import { HeaderStyles as s } from './Header.styles';
import Image from 'next/image';

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
  menuLinks = [],
  title,
}: HeaderProps): JSX.Element => {
  return (
    <s.Wrapper>
      <Link href="/" passHref>
        <s.IconWrapper>
          <Image
            src={`${typeof location != 'undefined' ? location.origin : ''}/images/icon.png`}
            height="60"
            width="60"
            alt={title}
          ></Image>
        </s.IconWrapper>
      </Link>

      {(user || onLogin || onCreateAccount) && (
        <div>
          {user ? (
            <Button size="small" onClick={onLogout} label="Log out" />
          ) : (
            <>
              {onLogin && <Button size="small" onClick={onLogin} label="Log in" />}
              {onCreateAccount && <Button size="small" onClick={onCreateAccount} label="Sign up" />}
            </>
          )}
        </div>
      )}
      <nav>
        <s.MenuItems>
          {menuLinks.map((link) => {
            if (link.name) {
              if (
                typeof window !== 'undefined' &&
                (location.pathname == link.link || location.pathname.startsWith(`${link.link}/`))
              ) {
                return (
                  <li key={link.name}>
                    <Link href={link.link} passHref>
                      <s.MenuLink>
                        <s.MenuActive>{link.name}</s.MenuActive>
                      </s.MenuLink>
                    </Link>
                  </li>
                );
              }
              return (
                <li key={link.name}>
                  <Link href={link.link} passHref>
                    <s.MenuLink>
                      <RisingText text={link.name} colorPair={ColorPair.Primary} />
                    </s.MenuLink>
                  </Link>
                </li>
              );
            }
          })}
        </s.MenuItems>
      </nav>
    </s.Wrapper>
  );
};
