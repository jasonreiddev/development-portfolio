import Link from 'next/link';
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
      <Link
        passHref
        href={`
          https://twitter.com/intent/tweet?text=${shareText}:&url=${shareUrl}`}
      >
        <s.Share title="Share via Twitter" target="_blank">
          <MdShare />
          <div>{text}</div>
        </s.Share>
      </Link>
    </s.Wrapper>
  );
};
