import { LandingStyles } from './landing.styles';

export interface LandingProps {
  storybookUrl?: string;
}

export const Landing = ({ storybookUrl }: LandingProps): JSX.Element => (
  <LandingStyles>
    <section>
      <h1>Next.js Component Library</h1>
      <p>
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
      </p>
    </section>
  </LandingStyles>
);
