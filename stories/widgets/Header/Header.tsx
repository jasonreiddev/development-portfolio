// import Link from 'next/link';
import { Button } from '../../components/Button/Button';
// import {Link} from 'gatsby';
// import {HiSun} from '@react-icons/all-files/hi/HiSun';
// import {HiMoon} from '@react-icons/all-files/hi/HiMoon';
// import {GoPaintcan} from '@react-icons/all-files/go/GoPaintcan';

// import ThemeContext from '../../context/ThemeContext';
import { HeaderStyles } from './Header.styles';

export interface Links {
  name: string;
  link: string;
  nameOverrideNav?: string;
}

interface HeaderProps {
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
    <HeaderStyles>
      <div className="wrapper">
        {/* Logo here */}
        <h1>{title}</h1>
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
      </div>
    </HeaderStyles>
    // <HeaderStyles>
    //   <div>
    //     <a>
    //       <Link href="/" passHref>
    //         <h1>{title}</h1>
    //       </Link>
    //     </a>
    //     <div>
    //       <nav>
    //         <ul>
    //           {menuLinks &&
    //             menuLinks.map((link) => (
    //               <li key={link.name}>
    //                 <Link
    //                   //className={link.name == title ?'active' : ''}
    //                   href={link.link}
    //                 >
    //                   {link.nameOverrideNav ? link.nameOverrideNav : link.name}
    //                 </Link>
    //               </li>
    //             ))}
    //           <li>
    //             {/* <ThemeContext.Consumer>
    //               {(theme) => (
    //                 <ThemeIconStyles type="button" className="active"
    //                   onClick={theme.theme == 'custom' ? theme.goToThemePage : theme.toggleTheme}>
    //                   {
    //                   theme.theme == 'dark' ?
    //                   <HiMoon/> :
    //                   theme.theme == 'light' ?
    //                   <HiSun/> :
    //                   <GoPaintcan/>
    //                   }
    //                 </ThemeIconStyles>
    //               )}
    //             </ThemeContext.Consumer> */}
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //   </div>
    // </HeaderStyles>
  );
};
