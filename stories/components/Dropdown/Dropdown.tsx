import { FunctionComponent, ReactNode } from 'react';
import { DropdownStyles } from './Dropdown.styles';
import { MdAccountCircle } from 'react-icons/md';

export enum Icon {
  None,
  Account,
}

export interface DropdownProps {
  text: string;
  icon: Icon;
  active: boolean;
  fullWidth: boolean;
  expand: boolean;
  toggleActive: VoidFunction;
  dropdownRef: React.Ref<HTMLElement>;
  dropdownItemGroups: DropdownItem[][];
}

export interface DropdownItem {
  text: string;
  href?: string;
  onClick?(): void;
  danger: boolean;
}

const renderIcon = (icon: Icon): ReactNode => {
  switch (icon) {
    case Icon.None:
      return;
    case Icon.Account:
      return <MdAccountCircle />;
  }
};

export const Dropdown: FunctionComponent<DropdownProps> = ({
  text,
  icon,
  active,
  fullWidth,
  expand,
  toggleActive,
  dropdownRef,
  dropdownItemGroups,
}) => {
  return (
    <DropdownStyles.Container fullWidth={fullWidth}>
      <DropdownStyles.Header hasIcon={icon !== 0}>
        <div onClick={toggleActive}>
          {renderIcon(icon)}
          <span>{text}</span>
        </div>
      </DropdownStyles.Header>
      {dropdownItemGroups && (
        <nav ref={dropdownRef}>
          <DropdownStyles.Dropdown active={active} fullWidth={fullWidth} expand={expand}>
            <DropdownStyles.DropdownInner>
              {dropdownItemGroups.map((group, index) => (
                <>
                  {index > 0 && <hr />}
                  <ul key={`DropdownGroup-${index}`}>
                    {group.map((item, index) => (
                      <li key={`DropdownItem-${index}`}>
                        <a
                          href={item.href}
                          onClick={item.onClick}
                          className={item.danger ? 'danger' : ''}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </DropdownStyles.DropdownInner>
          </DropdownStyles.Dropdown>
        </nav>
      )}
    </DropdownStyles.Container>
  );
};

export default Dropdown;
