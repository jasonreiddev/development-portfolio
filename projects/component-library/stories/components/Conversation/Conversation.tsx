import { ReactNode, Ref } from 'react';
import { MdAccountCircle } from 'react-icons/md';

import { ConversationStyles as s } from './Conversation.styles';
import { ColorPair } from '../../../../helpers/media';

export enum Icon {
  None,
  Account,
}

export interface ConversationProps {
  chatName: string;
  icon: Icon;
  active: boolean;
  fullWidth: boolean;
  toggleActive: VoidFunction;
  dropdownRef: Ref<HTMLElement>;
  conversationItemGroups: ConversationItem[][];
  colorPair?: ColorPair;
  colorPairSentByMe?: ColorPair;
}

export interface ConversationItem {
  text: string;
  sentByMe: boolean;
}

const renderIcon = (icon: Icon): ReactNode => {
  switch (icon) {
    case Icon.None:
      return;
    case Icon.Account:
      return <MdAccountCircle />;
  }
};

export const Conversation = ({
  chatName,
  icon,
  active,
  fullWidth,
  toggleActive,
  conversationItemGroups,
  colorPair = ColorPair.Secondary,
  colorPairSentByMe = ColorPair.Tertiary,
}: ConversationProps): JSX.Element => {
  return (
    <s.Container fullWidth={fullWidth}>
      <s.Header hasIcon={icon !== 0}>
        <div onClick={toggleActive}>
          {renderIcon(icon)}
          <span>{chatName}</span>
        </div>
      </s.Header>
      {conversationItemGroups && (
        <s.Dropdown active={active} fullWidth={fullWidth}>
          {conversationItemGroups.map((group, index) => (
            <div key={`ConversationGroup-${index}`}>
              {index > 0 && <hr />}
              <s.DropdownInner key={`ConversationGroup-${index}`}>
                {group.map((item, index) => (
                  <s.ConversationItem
                    sentByMe={item.sentByMe}
                    colorPair={item.sentByMe ? colorPairSentByMe : colorPair}
                    key={`ConversationItem-${index}`}
                  >
                    {item.text}
                  </s.ConversationItem>
                ))}
              </s.DropdownInner>
            </div>
          ))}
        </s.Dropdown>
      )}
    </s.Container>
  );
};
