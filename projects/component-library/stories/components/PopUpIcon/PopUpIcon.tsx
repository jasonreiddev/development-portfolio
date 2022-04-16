import { MdInfo } from 'react-icons/md';
import { PopUpIconStyles as s } from './PopUpIcon.styles';

export const PopUpIcon = (): JSX.Element => {
  return (
    <s.Wrapper>
      <s.Button>
        <MdInfo />
      </s.Button>
    </s.Wrapper>
  );
};
