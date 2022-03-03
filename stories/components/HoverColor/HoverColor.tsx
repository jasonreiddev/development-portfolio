import { MdMail, MdLogout, MdRefresh, MdSearch, MdCircle } from 'react-icons/md';

import { HoverColorStyles as s } from './HoverColor.styles';

export interface HoverColorProps {
  text?: string;
  icon?: Icon;
  iconAlt?: string;
  date?: string;
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

export const HoverColor = ({ text, icon, date }: HoverColorProps): JSX.Element => {
  return (
    <s.Wrapper>
      {icon && <>{renderIcon(icon)}&nbsp;</>}
      <span className="highlight">{text}</span>
      {date && <span>&nbsp;- {date}</span>}
    </s.Wrapper>
  );
};
