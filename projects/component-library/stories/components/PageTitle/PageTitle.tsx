import { PageTitleStyles as s } from './PageTitle.styles';

export interface PageTitleProps {
  text?: string;
  subTitle?: string;
}

export const PageTitle = ({ text, subTitle }: PageTitleProps): JSX.Element => {
  return (
    <>
      <s.Text>{text}</s.Text>
      {subTitle && <s.TextSub>{subTitle}</s.TextSub>}
    </>
  );
};
