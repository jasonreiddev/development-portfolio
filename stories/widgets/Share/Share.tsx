import { MdShare } from 'react-icons/md';

import { ShareStyles as s } from './Share.styles';

interface ShareProps {
  text?: string;
  shareText?: string;
  shareUrl?: string;
}

export const Share = ({ text, shareText, shareUrl }: ShareProps): JSX.Element => {
  return (
    <s.Wrapper>
      <a
        title="Share via Twitter"
        href={`
          https://twitter.com/intent/tweet?text=${shareText}:&url=${shareUrl}`}
      >
        <MdShare />
        <br />
        <div>{text}</div>
      </a>
    </s.Wrapper>
  );
};
