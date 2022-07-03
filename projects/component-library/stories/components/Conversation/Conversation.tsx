import { Ref } from 'react';

import { ConversationStyles as s } from './Conversation.styles';
import { ColorPair, renderIcon, Icon } from 'helpers/media';

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
