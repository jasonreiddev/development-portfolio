import { FPHeaderStyles as s } from './FPHeader.styles';
import { SuperHeader } from '../../components/SuperHeader/SuperHeader';
import { Header, HeaderProps } from '../../widgets/Header/Header';
import { TypingEffect, TypingEffectProps } from '../../components/TypingEffect/TypingEffect';

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
  return (
    <s.Wrapper scrollOffset={scrollOffset} fullHeight={fullHeight}>
      <SuperHeader title="Jason Reid's" subTitle="Dev Portfolio"></SuperHeader>
      <s.HeaderWrapper>
        <Header {...headerProps}></Header>
        {fullHeight && typingEffectProps && (
          <s.TypingWrapper>
            <TypingEffect {...typingEffectProps} />
          </s.TypingWrapper>
        )}
      </s.HeaderWrapper>
    </s.Wrapper>
  );
};
