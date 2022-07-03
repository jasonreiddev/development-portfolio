import { FPHeaderStyles as s } from './FPHeader.styles';
import { SuperHeader } from '../../components/SuperHeader/SuperHeader';
import { Header, HeaderProps } from '../../widgets/Header/Header';
import { TypingEffect, TypingEffectProps } from '../../components/TypingEffect/TypingEffect';
import { IconButton } from '../../components/IconButton/IconButton';
import { ColorPair, Icon } from 'helpers/media';
import { createRef, useEffect, useState } from 'react';

export interface Links {
  name: string;
  link: string;
}

export interface FPHeaderProps {
  headerProps: HeaderProps;
  typingEffectProps: TypingEffectProps;
  scrollOffset: number;
  fullHeight: boolean;
}

export const FPHeader = ({
  headerProps: headerProps,
  scrollOffset = 0,
  fullHeight = true,
  typingEffectProps,
}: FPHeaderProps): JSX.Element => {
  const [scrollUp, setScrollUp] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const wrapperRef = createRef<HTMLInputElement>();

  useEffect(() => {
    if (fullHeight) {
      setScrollUp(window.innerHeight / 2 < scrollOffset);
      setShowScroll(window.document.body.scrollHeight > window.document.body.clientHeight);
    } else {
      setScrollUp(true);
      setShowScroll(window.innerHeight / 2 < scrollOffset);
    }
  }, [wrapperRef]);

  return (
    <s.Wrapper scrollOffset={scrollOffset} fullHeight={fullHeight} ref={wrapperRef}>
      <SuperHeader title="Jason Reid's" subTitle="Dev Portfolio"></SuperHeader>
      <s.HeaderWrapper>
        <Header {...headerProps}></Header>
        {fullHeight && typingEffectProps && (
          <s.TypingWrapper>
            <TypingEffect {...typingEffectProps} />
          </s.TypingWrapper>
        )}
      </s.HeaderWrapper>
      {showScroll && (
        <s.ScrollButtonWrapper>
          <IconButton
            icon={Icon.ArrowDown}
            colorPair={ColorPair.Tertiary}
            flipIconY={scrollUp}
            ariaLabel={scrollUp ? 'Scroll up' : 'Scroll down'}
            onClick={() => window.scrollTo(0, scrollUp ? 0 : window.innerHeight - 80)}
          />
        </s.ScrollButtonWrapper>
      )}
    </s.Wrapper>
  );
};
