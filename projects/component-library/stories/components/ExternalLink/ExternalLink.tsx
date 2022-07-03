import Link from 'next/link';
import { MdLink } from 'react-icons/md';

import { ExternalLinkStyles as s } from './ExternalLink.styles';
import { ColorPair } from 'helpers/media';

export interface ExternalLinkProps {
  to: string;
  text?: string;
  colorPair?: ColorPair;
}

export const ExternalLink = ({
  to = '/',
  text,
  colorPair = ColorPair.DefaultLink,
}: ExternalLinkProps): JSX.Element => {
  return (
    <Link href={to} passHref>
      <s.Link colorPair={colorPair}>
        <MdLink />
        {text}
      </s.Link>
    </Link>
  );
};
