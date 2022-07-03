import { Layout } from '../../Layout/Layout';
import { LandingStyles as s } from './landing.styles';
import { defaultLayoutProps } from 'portfolio/defaultLayoutProps';

export interface LandingProps {
  storybookUrl?: string;
}

defaultLayoutProps.fpHeaderProps.headerProps.title = 'Next.js Component Library';
defaultLayoutProps.fpHeaderProps.headerProps.menuLinks = [];

export const Landing = ({ storybookUrl }: LandingProps): JSX.Element => (
  <Layout {...defaultLayoutProps}>
    <s.Wrapper>
      <s.Title>Welcome!</s.Title>
      <s.Text>
        There isn&apos;t much to see here, but check out the&nbsp;
        {storybookUrl ? (
          <b>
            <a href={storybookUrl}>storybook</a>
          </b>
        ) : (
          <>
            storybook by running &apos;<b>Yarn Storybook</b>&apos;
          </>
        )}
        !
      </s.Text>
    </s.Wrapper>
  </Layout>
);
