import Link from 'next/link';
import { MdLink } from 'react-icons/md';

import { ExternalLinkStyles as s } from './ExternalLink.styles';

export interface ExternalLinkProps {
  to: string;
  text?: string;
}

export const ExternalLink = ({ to, text }: ExternalLinkProps): JSX.Element => {
  return (
    <Link href={to} passHref>
      <s.Link>
        <MdLink />
        {text}
      </s.Link>
    </Link>
  );
};
