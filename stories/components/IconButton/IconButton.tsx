import { MdMail, MdLogout, MdRefresh, MdSearch, MdCircle } from 'react-icons/md';

import { IconButtonStyles as s } from './IconButton.styles';

export interface IconButtonProps {
  icon: Icon;
  active?: boolean;
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export enum Icon {
  None,
  Mail,
  LogOut,
  Refresh,
  Search,
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
  }
};

export const IconButton = ({
  icon,
  active = false,
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: IconButtonProps): JSX.Element => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <s.Wrapper
      active={active}
      type="button"
      className={[`${size}`, mode].join(' ')}
      backgroundColor={backgroundColor}
      {...props}
      data-tooltip={label}
      data-tooltip--close={size == 'small' ? 'true' : null}
    >
      <span className="icon">{renderIcon(icon)}</span>
    </s.Wrapper>
  );
};
