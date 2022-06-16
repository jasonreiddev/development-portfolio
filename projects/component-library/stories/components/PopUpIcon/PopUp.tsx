import { PopUpStyles as s } from './PopUp.styles';

export interface PopUpProps {
  children: JSX.Element | string;
}

export const PopUp = ({ children }: PopUpProps): JSX.Element => {
  return (
    <s.Wrapper>
      <s.PopUp>{children}</s.PopUp>
    </s.Wrapper>
  );
};
