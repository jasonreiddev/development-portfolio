import { FaCode } from 'react-icons/fa';
import { HiTerminal } from 'react-icons/hi';
import { IoBrowsers } from 'react-icons/io5';

import { Header, Links } from '../widgets/Header/Header';
import { Share } from '../widgets/Share/Share';
import { Like } from '../widgets/Like/Like';

import { LayoutStyles as s } from './Layout.styles';
import { FooterCard } from '../widgets/FooterCard/FooterCard';
import { useState } from 'react';
interface LayoutProps {
  children?: JSX.Element;
  title?: string;
  menuLinks: Links[];
  likesMockDBValue: number;
  loading?: boolean;
}

export const Layout = ({
  children,
  title,
  menuLinks,
  likesMockDBValue = 0,
  loading = false,
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
      <s.SVGStyles>
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
      </s.SVGStyles>
      <s.SiteBorderStyles className={'mobile-scroll'}>
        <s.LoadMaskStyles className="load-mask" loading={loading} />
        <s.LoadSpinnerStyles className="load-spinner" loading={loading} />
        <Header title={title} menuLinks={menuLinks} />
        <s.BodyDivStyles className={'column-small tablet-scroll'}>
          <s.ContentStyles className={'desktop-scroll'}>
            <s.MainStyles>
              <div>{children}</div>
              <s.DesktopFooterStyles>
                <FooterCard text={`© ${new Date().getFullYear()} Jason Reid`}></FooterCard>
              </s.DesktopFooterStyles>
            </s.MainStyles>
          </s.ContentStyles>
          <s.AsideStyles className="aside-left">
            <Like getLikesDB={getLikesDB} updateLikesDB={updateLikesDB} liked={false} />
          </s.AsideStyles>
          <s.AsideStyles className="aside-right">
            <Share
              text="Share"
              shareText={`${title ? title : 'site.titleTemplate'} - @${'site.twitterUsername'}`}
              shareUrl={`${'site.url'}${typeof window !== 'undefined' ? location.pathname : ''}`}
            />
          </s.AsideStyles>
          <s.FooterStyles>
            <FooterCard text={`© ${new Date().getFullYear()} Jason Reid`}></FooterCard>
          </s.FooterStyles>
        </s.BodyDivStyles>
      </s.SiteBorderStyles>
    </>
  );
};
