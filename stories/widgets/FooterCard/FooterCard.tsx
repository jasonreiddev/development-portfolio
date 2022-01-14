import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';

import { SmallText } from '../../components/SmallText/SmallText';
import { FooterCardStyles, MediaLinksStyles, TextStyles } from './FooterCard.styles';

interface FooterCardProps {
  text?: string;
}

export const FooterCard = ({ text }: FooterCardProps): JSX.Element => {
  return (
    <FooterCardStyles>
      <MediaLinksStyles>
        <a title="LinkedIn" href="https://www.linkedin.com/in/jasonreiddev/">
          <AiFillLinkedin />
        </a>
        <a title="GitHub" href="https://github.com/jasonreiddev">
          <AiFillGithub />
        </a>
        <a title="Twitter" href="https://twitter.com/jasonreiddev">
          <AiOutlineTwitter />
        </a>
      </MediaLinksStyles>
      <TextStyles>
        <SmallText text={text} />
      </TextStyles>
    </FooterCardStyles>
  );
};
