import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import Link from 'next/link';

import { FooterStyles as s } from './Footer.styles';
import { ColorPair } from '../../../../helpers/media';

export interface FooterProps {
  title: string;
  colorPair?: ColorPair;
}

export const Footer = ({ title, colorPair = ColorPair.Primary }: FooterProps): JSX.Element => {
  function goToTop(): void {
    if (typeof window != undefined) {
      document.getElementsByTagName('main')[0].scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  return (
    <s.Footer colorPair={colorPair}>
      <s.Title>
        {title && (
          <Link href="/">
            <>{title}</>
          </Link>
        )}
      </s.Title>

      <s.Icon>
        <BsFillArrowUpCircleFill onClick={goToTop} />
      </s.Icon>
    </s.Footer>
  );
};
