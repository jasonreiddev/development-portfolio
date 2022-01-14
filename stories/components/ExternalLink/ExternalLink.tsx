import { MdLink } from 'react-icons/md';

import { ExternalLinkStyles } from './ExternalLink.styles';

interface ExternalLinkProps {
  to?: string;
  text?: string;
}

export const ExternalLink = ({ to, text }: ExternalLinkProps): JSX.Element => {
  return (
    <ExternalLinkStyles href={to}>
      <MdLink />
      {text}
    </ExternalLinkStyles>
  );
};
