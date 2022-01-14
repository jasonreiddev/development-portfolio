// import React, { useState, useEffect } from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
//import { Helmet } from 'react-helmet-async';
// import 'normalize.css';
import { FaCode } from 'react-icons/fa';
import { HiTerminal } from 'react-icons/hi';
import { IoBrowsers } from 'react-icons/io5';
// import firebase from '../../utils/useFirebase';
// import { doc, getDoc } from 'firebase/firestore';

// import { SEO } from '../widgets/SEO/SEO';
import { Header, Links } from '../widgets/Header/Header';
import { Share } from '../widgets/Share/Share';
import { Like } from '../widgets/Like/Like';

import {
  AsideStyles,
  BodyDivStyles,
  ContentStyles,
  FooterStyles,
  MainStyles,
  SVGStyles,
  SiteBorderStyles,
} from './Layout.styles';
import { FooterCard } from '../widgets/FooterCard/FooterCard';
import { useState } from 'react';
interface LayoutProps {
  children?: JSX.Element;
  title?: string;
  menuLinks: Links[];
  likesMockDBValue: number;
}

export const Layout = ({
  children,
  title,
  menuLinks,
  likesMockDBValue = 0,
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
      <SVGStyles>
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
      </SVGStyles>
      <SiteBorderStyles className={'mobile-scroll'}>
        {/* <Helmet>
            <body className={'theme-' + theme.theme} />
          </Helmet> */}
        {/* <SEO title={title} /> */}
        <div className="load-mask" />
        <div className="load-spinner" />
        {/* <Header menuLinks={site.menuLinks} title={title} /> */}
        <Header title={title} menuLinks={menuLinks} />
        <BodyDivStyles className={'column-small tablet-scroll'}>
          <ContentStyles className={'desktop-scroll'}>
            <MainStyles>{children}</MainStyles>
          </ContentStyles>
          <AsideStyles className="aside-left">
            <Like getLikesDB={getLikesDB} updateLikesDB={updateLikesDB} liked={false} />
          </AsideStyles>
          <AsideStyles className="aside-right">
            {/* <Share
                text="Share"
                shareText={`${title ? title : site.titleTemplate} - @${site.twitterUsername}`}
                shareUrl={`${site.url}${typeof window !== 'undefined' ? location.pathname : ''}`}
              /> */}
            <Share
              text="Share"
              shareText={`${title ? title : 'site.titleTemplate'} - @${'site.twitterUsername'}`}
              shareUrl={`${'site.url'}${typeof window !== 'undefined' ? location.pathname : ''}`}
            />
          </AsideStyles>
          <FooterStyles>
            <FooterCard text={`© ${new Date().getFullYear()} Jason Reid`}></FooterCard>
          </FooterStyles>
        </BodyDivStyles>
      </SiteBorderStyles>
    </>
  );
};
