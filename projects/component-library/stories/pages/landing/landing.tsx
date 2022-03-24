import { Layout } from '../../Layout/Layout';
import { LandingStyles as s } from './landing.styles';

export interface LandingProps {
  storybookUrl?: string;
}

export const Landing = ({ storybookUrl }: LandingProps): JSX.Element => (
  <Layout menuLinks={[]} title="Next.js Component Library">
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
