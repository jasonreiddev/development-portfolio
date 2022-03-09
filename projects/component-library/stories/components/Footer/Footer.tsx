import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import Link from 'next/link';

import { FooterStyles as s } from './Footer.styles';

export const Footer = (): JSX.Element => {
  function goToTop(): void {
    if (typeof window != undefined) {
      document.getElementsByTagName('main')[0].scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  return (
    <s.Footer>
      <s.Title>
        <Link href="/">Home</Link>
      </s.Title>
      <s.Icon>
        <BsFillArrowUpCircleFill onClick={goToTop} />
      </s.Icon>
    </s.Footer>
  );
};
