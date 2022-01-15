import { FunctionComponent } from 'react';
import { FooterStyles } from './Footer.styles';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import Link from 'next/link';

const Footer: FunctionComponent = () => {
  function goToTop(): void {
    if (typeof window != undefined) {
      document.getElementsByTagName('main')[0].scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  return (
    <FooterStyles.Footer>
      <FooterStyles.Title>
        <Link href="/">Home</Link>
      </FooterStyles.Title>
      <FooterStyles.Icon>
        <BsFillArrowUpCircleFill onClick={goToTop} />
      </FooterStyles.Icon>
    </FooterStyles.Footer>
  );
};

export default Footer;
