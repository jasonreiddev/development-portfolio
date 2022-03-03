import { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { HiTerminal } from 'react-icons/hi';
import { IoBrowsers } from 'react-icons/io5';

import { Header, Links } from '../widgets/Header/Header';
import { Share } from '../widgets/Share/Share';
import { Like } from '../widgets/Like/Like';
import { LayoutStyles as s } from './Layout.styles';
import { FooterCard } from '../widgets/FooterCard/FooterCard';

export interface LayoutProps {
  title?: string;
  menuLinks: Links[];
  likesMockDBValue: number;
  loading?: boolean;
  children?: JSX.Element;
}

export const Layout = ({
  title,
  menuLinks,
  likesMockDBValue = 0,
  loading = false,
  children,
}: LayoutProps): JSX.Element => {
  // Mock DB shenanigans
  const [LikesMockDBValue, setLikesMockDBValue] = useState(likesMockDBValue);
  function updateLikesDB(change: number): void {
    const newVal = getLikesDB() + change;
    setLikesMockDBValue(LikesMockDBValue + newVal);
  }
  function getLikesDB(): number {
    return LikesMockDBValue;
  }

  return (
    <>
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
      <s.LoadMask className="load-mask" loading={loading} />
      <s.LoadSpinner className="load-spinner" loading={loading} />
      <s.Wrapper className={'mobile-scroll'}>
        <Header title={title} menuLinks={menuLinks} />
        <s.Aside className="aside-left">
          <Like getLikesDB={getLikesDB} updateLikesDB={updateLikesDB} liked={false} />
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
