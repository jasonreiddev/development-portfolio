import { FPHeaderStyles as s } from './FPHeader.styles';
import { SuperHeader } from '../../components/SuperHeader/SuperHeader';
import { Header, HeaderProps } from '../../widgets/Header/Header';

export interface Links {
  name: string;
  link: string;
}

export interface FPHeaderProps {
  headerProps: HeaderProps;
  scrollOffset: number;
  fullHeight: boolean;
}

export const FPHeader = ({
  headerProps: headerProps,
  scrollOffset = 0,
  fullHeight = true,
}: FPHeaderProps): JSX.Element => {
  return (
    <s.Wrapper scrollOffset={scrollOffset} fullHeight={fullHeight}>
      <SuperHeader title="Jason Reid's" subTitle="Dev Portfolio"></SuperHeader>
      <s.HeaderWrapper>
        <Header {...headerProps}></Header>
      </s.HeaderWrapper>
    </s.Wrapper>
  );
};
