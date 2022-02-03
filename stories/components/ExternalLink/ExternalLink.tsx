import { MdLink } from 'react-icons/md';

import { ExternalLinkStyles as s } from './ExternalLink.styles';

interface ExternalLinkProps {
  to?: string;
  text?: string;
}

export const ExternalLink = ({ to, text }: ExternalLinkProps): JSX.Element => {
  return (
    <s.Link href={to}>
      <MdLink />
      {text}
    </s.Link>
  );
};
