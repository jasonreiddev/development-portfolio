import { MdMail, MdLogout, MdRefresh, MdSearch, MdCircle } from 'react-icons/md';

import { IconButtonStyles } from './IconButton.styles';

interface IconButtonProps {
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
  SignOut,
  Refresh,
  Search,
}

const renderIcon = (icon: Icon): JSX.Element => {
  switch (icon) {
    case Icon.None:
      return <MdCircle />;
    case Icon.Mail:
      return <MdMail />;
    case Icon.SignOut:
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
    <IconButtonStyles
      active={active}
      type="button"
      className={[`${size}`, mode].join(' ')}
      backgroundColor={backgroundColor}
      {...props}
      data-tooltip={label}
    >
      <span className="icon">{renderIcon(icon)}</span>
    </IconButtonStyles>
  );
};
