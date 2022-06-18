import Link from 'next/link';

import { SuperHeaderStyles as s } from './SuperHeader.styles';
import { ColorPair } from '../../../../helpers/media';
import { ToggleDarkMode } from '../../../../helpers/layoutContext';

export interface SuperHeaderProps {
  title: string;
  subTitle: string;
  colorPair?: ColorPair;
}

export const SuperHeader = ({
  title,
  subTitle,
  colorPair = ColorPair.Default,
}: SuperHeaderProps): JSX.Element => {
  return (
    <s.SuperHeader colorPair={colorPair}>
      <Link href="/" passHref>
        <s.Title>
          {title && (
            <>
              {title}&nbsp;
              <s.SubTitle>{subTitle}</s.SubTitle>
            </>
          )}
        </s.Title>
      </Link>
      <ToggleDarkMode />
    </s.SuperHeader>
  );
};
