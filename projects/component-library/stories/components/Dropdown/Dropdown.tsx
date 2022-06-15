import { ReactNode, Ref } from 'react';
import { MdAccountCircle } from 'react-icons/md';

import { DropdownStyles as s } from './Dropdown.styles';
import { ColorPair } from '../../../../helpers/media';

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
  dropdownRef: Ref<HTMLElement>;
  dropdownItemGroups: DropdownItem[][];
  colorPair?: ColorPair;
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

export const Dropdown = ({
  text,
  icon,
  active,
  fullWidth,
  expand,
  toggleActive,
  dropdownRef,
  dropdownItemGroups,
  colorPair = ColorPair.Secondary,
}: DropdownProps): JSX.Element => {
  return (
    <s.Container fullWidth={fullWidth} colorPair={colorPair}>
      <s.Header hasIcon={icon !== 0} colorPair={colorPair}>
        <div onClick={toggleActive}>
          {renderIcon(icon)}
          <span>{text}</span>
        </div>
      </s.Header>
      {dropdownItemGroups && (
        <nav ref={dropdownRef}>
          <s.Dropdown active={active} fullWidth={fullWidth} expand={expand}>
            <s.DropdownInner>
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
            </s.DropdownInner>
          </s.Dropdown>
        </nav>
      )}
    </s.Container>
  );
};
