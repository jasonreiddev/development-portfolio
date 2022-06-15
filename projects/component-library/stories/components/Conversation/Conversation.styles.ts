import styled from 'styled-components';

import { Device, from } from '../../../../helpers/media';
import { ColorPair, useColorPair } from '../../../../helpers/media';

interface ConversationStylesProps {
  sentByMe?: boolean;
  colorPair?: ColorPair;
}

const Container = styled.div<{ fullWidth: boolean }>`
  background-color: var(--color-base-bright);
  border: 1px solid var(--color-contrast);
  text-align: center;
  height: 100%;
  width: ${(p) => (p.fullWidth ? '100%' : 'fit-content')};
  @media ${from(Device.Mobile)} {
    min-width: 10em;
    border-radius: var(--border-radius);
    padding: 20px 0;
  }
`;

const Dropdown = styled.div<{ active: boolean; fullWidth: boolean }>`
  border-radius: var(--border-radius);
  ${(p) =>
    p.fullWidth
      ? `
    border-bottom-right-radius: var(--border-radius);
    left: 0;
    width: 100%;

    ul {
      display: flex;
      justify-content: center;
    }
  `
      : null}
`;

const Header = styled.div<{ hasIcon: boolean }>`
  color: var(--color-contrast);
  display: inline-flex;
  align-items: center;
  height: 100%;

  div {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    svg {
      font-size: 35px;
      margin: 0 10px 0 10px;
      @media ${from(Device.Mobile)} {
        margin-left: 0px;
        font-size: 25px;
      }
    }

    ${(p) =>
      p.hasIcon
        ? `
        span {
          display: none;
          @media ${from(Device.Mobile)} {
            display: initial;
          }
        }
        `
        : null}
  }
`;

const DropdownInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  min-height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ConversationItem = styled.li<ConversationStylesProps>`
  display: block;
  padding: 16px;
  margin: 8px;
  border-radius: var(--border-radius);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 70%;
  text-align: left;

  ${(p) => (p.sentByMe ? `` : `align-self: flex-end;`)}
  ${(p: ConversationStylesProps) => useColorPair(p.colorPair, '10pt')}
`;

export const ConversationStyles = {
  Container,
  Header,
  Dropdown,
  DropdownInner,
  ConversationItem,
};
