import { FaCode } from 'react-icons/fa';
import { HiTerminal } from 'react-icons/hi';
import { IoBrowsers } from 'react-icons/io5';

import { Links } from '../widgets/Header/Header';
import { Share } from '../widgets/Share/Share';
import { Like } from '../widgets/Like/Like';
import { LayoutStyles as s } from './Layout.styles';
import { FooterCard } from '../widgets/FooterCard/FooterCard';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { GlobalStyles } from '../../styles/GlobalStyles';
import Head from 'next/head';
import { LayoutContext } from '../../../helpers/layoutContext';
import { FPHeader, FPHeaderProps } from '../full-page-widgets/Header/FPHeader';
import { useRouter } from 'next/router';

export interface LayoutProps {
  fpHeaderProps: FPHeaderProps;
  scrollOffset: number;
  description: string;
  getLikesDBValue?: (setLikesFunction: Dispatch<SetStateAction<number>>) => Promise<void>;
  setLikesDBValue?: (value: number) => void;
  loading?: boolean;
  children?: JSX.Element | string;
}

export const Layout = ({
  fpHeaderProps,
  scrollOffset = 0,
  description,
  setLikesDBValue = () => 1,
  getLikesDBValue = async () => {
    0;
  },
  loading = false,
  children,
}: LayoutProps): JSX.Element => {
  const { pageTitle } = useContext(LayoutContext);
  const { pageDescription } = useContext(LayoutContext);
  if (pageDescription) {
    description = `${description}. ${pageDescription}`;
  }
  const { dark } = useContext(LayoutContext);

  const [fullHeight, setFullHeight] = useState(true);

  const location = useRouter();

  useEffect(() => {
    setFullHeight(typeof window !== 'undefined' && location.pathname == '/');
  }, [location]);

  return (
    <>
      <Head>
        <title>
          {fpHeaderProps.headerProps.title}
          {pageTitle && ` / ${pageTitle}`}
        </title>
        <meta name="description" content={description}></meta>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#b4649a" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#b4649a" />
      </Head>
      <GlobalStyles dark={dark} />
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

      <s.Header>
        <FPHeader {...fpHeaderProps} scrollOffset={scrollOffset} fullHeight={fullHeight} />
      </s.Header>
      <s.Wrapper>
        {children}
        {/* <s.Aside className="aside-left">
          <Like setLikesDBValue={setLikesDBValue} getLikesDBValue={getLikesDBValue} liked={false} />
        </s.Aside>
        <s.Main>
          <div>{children}</div>
          <s.NestedFooter>
            <FooterCard text={`© ${new Date().getFullYear()} Jason Reid`}></FooterCard>
          </s.NestedFooter>
        </s.Main>
        <s.Aside className="aside-right">
          <Share
            text="Share"
            shareText={`${headerProps.title} - @jasonreiddev`}
            shareUrl={
              typeof window !== 'undefined' ? location.host + location.pathname : 'jasonreid.dev'
            }
          />
        </s.Aside> */}
      </s.Wrapper>
      <s.Footer>
        <FooterCard text={`© ${new Date().getFullYear()} Jason Reid`}></FooterCard>
      </s.Footer>
    </>
  );
};
