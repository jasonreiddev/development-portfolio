import { MdShare } from 'react-icons/md';

import { ShareStyles as s } from './Share.styles';

export interface ShareProps {
  text?: string;
  shareText?: string;
  shareUrl?: string;
}

export const Share = ({ text, shareText, shareUrl }: ShareProps): JSX.Element => {
  return (
    <s.Wrapper>
      <s.Share
        title="Share via Twitter"
        href={`
          https://twitter.com/intent/tweet?text=${shareText}:&url=${shareUrl}`}
        target="_blank"
      >
        <MdShare />
        <div>{text}</div>
      </s.Share>
    </s.Wrapper>
  );
};
