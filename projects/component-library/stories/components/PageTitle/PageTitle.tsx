import { PageTitleStyles as s } from './PageTitle.styles';

export interface PageTitleProps {
  text?: string;
}

export const PageTitle = ({ text }: PageTitleProps): JSX.Element => {
  return <s.Text>{text}</s.Text>;
};
