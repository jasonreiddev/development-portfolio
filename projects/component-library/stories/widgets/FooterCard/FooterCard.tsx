import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';

import { SmallText } from '../../components/SmallText/SmallText';
import { FooterCardStyles as s } from './FooterCard.styles';

export interface FooterCardProps {
  text?: string;
}

export const FooterCard = ({ text }: FooterCardProps): JSX.Element => {
  return (
    <s.Wrapper>
      <s.MediaLinks>
        <a title="LinkedIn" href="https://www.linkedin.com/in/jasonreiddev/">
          <AiFillLinkedin />
        </a>
        <a title="GitHub" href="https://github.com/jasonreiddev">
          <AiFillGithub />
        </a>
        <a title="Twitter" href="https://twitter.com/jasonreiddev">
          <AiOutlineTwitter />
        </a>
      </s.MediaLinks>
      <s.Text>
        <SmallText text={text} />
      </s.Text>
    </s.Wrapper>
  );
};
