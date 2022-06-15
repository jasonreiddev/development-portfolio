import { MdCircle, MdMail, MdLogout, MdRefresh, MdSearch } from 'react-icons/md';
import { HiSun, HiMoon } from 'react-icons/hi';
import { CgEditFlipV } from 'react-icons/cg';

import { IconButtonStyles as s } from './IconButton.styles';
import { ColorPair } from '../../../../helpers/media';

export interface IconButtonProps {
  icon: Icon;
  flipIconY?: boolean;
  active?: boolean;
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  ariaLabel: string;
  onClick?: () => void;
  align?: 'left' | 'center' | 'bottom-right';
  colorPair?: ColorPair;
}

export enum Icon {
  None,
  Mail,
  LogOut,
  Refresh,
  Search,
  Sun,
  Moon,
  Flip,
}

const renderIcon = (icon: Icon): JSX.Element => {
  switch (icon) {
    case Icon.None:
      return <MdCircle />;
    case Icon.Mail:
      return <MdMail />;
    case Icon.LogOut:
      return <MdLogout />;
    case Icon.Refresh:
      return <MdRefresh />;
    case Icon.Search:
      return <MdSearch />;
    case Icon.Sun:
      return <HiSun />;
    case Icon.Moon:
      return <HiMoon />;
    case Icon.Flip:
      return <CgEditFlipV />;
  }
};

export const IconButton = ({
  icon,
  flipIconY,
  active = false,
  size = 'medium',
  label,
  ariaLabel,
  align = 'left',
  colorPair = ColorPair.Secondary,
  ...props
}: IconButtonProps): JSX.Element => {
  return (
    <s.Wrapper align={align}>
      <s.Button
        active={active}
        type="button"
        size={size}
        {...props}
        data-tooltip={label}
        data-tooltip--close={size == 'small' ? 'true' : null}
        aria-label={ariaLabel}
        colorPair={colorPair}
      >
        <s.Icon flipIconY={flipIconY}>{renderIcon(icon)}</s.Icon>
      </s.Button>
    </s.Wrapper>
  );
};
