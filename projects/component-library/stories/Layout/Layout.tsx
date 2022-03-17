import { FaCode } from 'react-icons/fa';
import { HiTerminal } from 'react-icons/hi';
import { IoBrowsers } from 'react-icons/io5';

import { Header, Links } from '../widgets/Header/Header';
import { Share } from '../widgets/Share/Share';
import { Like } from '../widgets/Like/Like';
import { LayoutStyles as s } from './Layout.styles';
import { FooterCard } from '../widgets/FooterCard/FooterCard';
import { Dispatch, SetStateAction, useContext } from 'react';
import { GlobalStyles } from '../../styles/GlobalStyles';
import Head from 'next/head';
import { LayoutContext } from '../../../helpers/layoutContext';

export interface LayoutProps {
  title?: string;
  pageTitle?: string;
  headerTitle?: string;
  menuLinks: Links[];
  getLikesDBValue?: (setLikesFunction: Dispatch<SetStateAction<number>>) => Promise<void>;
  setLikesDBValue?: (value: number) => void;
  loading?: boolean;
  children?: JSX.Element | string;
}

export const Layout = ({
  title,
  headerTitle,
  menuLinks,
  setLikesDBValue = () => 1,
  getLikesDBValue = async () => {
    0;
  },
  loading = false,
  children,
}: LayoutProps): JSX.Element => {
  const { pageTitle } = useContext(LayoutContext);
  if (pageTitle) {
    title = `${title} | ${pageTitle}`;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <GlobalStyles />
      <s.SVG>
        <defs>
          <pattern
            id="background-icons"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <FaCode x="0" y="0" />
            <HiTerminal x="35" y="35" />
            <IoBrowsers x="70" y="70" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#background-icons)" />
      </s.SVG>
      {loading && (
        <>
          <s.LoadMask className="load-mask" />
          <s.LoadSpinner className="load-spinner" />
        </>
      )}
      <s.Wrapper className={'mobile-scroll'}>
        <Header title={headerTitle} menuLinks={menuLinks} />
        <s.Aside className="aside-left">
          <Like setLikesDBValue={setLikesDBValue} getLikesDBValue={getLikesDBValue} liked={false} />
        </s.Aside>
        <s.Main>
          <div>{children}</div>
          <s.MobileFooter>
            <FooterCard text={`© ${new Date().getFullYear()} Jason Reid`}></FooterCard>
          </s.MobileFooter>
        </s.Main>
        <s.Aside className="aside-right">
          <Share
            text="Share"
            shareText={`${title ? title : 'site.titleTemplate'} - @${'site.twitterUsername'}`}
            shareUrl={`${'site.url'}${typeof window !== 'undefined' ? location.pathname : ''}`}
          />
        </s.Aside>
        <s.DesktopFooter>
          <FooterCard text={`© ${new Date().getFullYear()} Jason Reid`}></FooterCard>
        </s.DesktopFooter>
      </s.Wrapper>
    </>
  );
};
