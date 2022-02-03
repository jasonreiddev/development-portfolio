import { FunctionComponent, ReactNode } from 'react';
import { ConversationStyles } from './Conversation.styles';
import { MdAccountCircle } from 'react-icons/md';

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
  dropdownRef: React.Ref<HTMLElement>;
  conversationItemGroups: ConversationItem[][];
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

export const Conversation: FunctionComponent<ConversationProps> = ({
  chatName,
  icon,
  active,
  fullWidth,
  toggleActive,
  conversationItemGroups,
}) => {
  return (
    <ConversationStyles.Container fullWidth={fullWidth}>
      <ConversationStyles.Header hasIcon={icon !== 0}>
        <div onClick={toggleActive}>
          {renderIcon(icon)}
          <span>{chatName}</span>
        </div>
      </ConversationStyles.Header>
      {conversationItemGroups && (
        <ConversationStyles.Dropdown active={active} fullWidth={fullWidth}>
          {conversationItemGroups.map((group, index) => (
            <div key={`ConversationGroup-${index}`}>
              {index > 0 && <hr />}
              <ConversationStyles.DropdownInner key={`ConversationGroup-${index}`}>
                {group.map((item, index) => (
                  <ConversationStyles.ConversationItem
                    sentByMe={item.sentByMe}
                    key={`ConversationItem-${index}`}
                  >
                    {item.text}
                  </ConversationStyles.ConversationItem>
                ))}
              </ConversationStyles.DropdownInner>
            </div>
          ))}
        </ConversationStyles.Dropdown>
      )}
    </ConversationStyles.Container>
  );
};

export default Conversation;
