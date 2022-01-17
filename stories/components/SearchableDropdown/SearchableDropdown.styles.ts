import { darken } from 'polished';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 318px;
`;

const ListWrapper = styled.div``;

const List = styled.ul`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 310px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-black);
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${darken(0.1, 'var(--color-black)')};
  }
`;

const Option = styled.li`
  font-size: 17px;
  font-weight: 500;
  padding: 7px 0px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  position: relative;
  left: 0px;

  &.option-hidden {
    height: 0px;
    opacity: 0;
    padding: 0;
  }

  &.option-chosen {
    color: var(--color-secondary);
  }

  &:hover {
    left: 5px;
  }

  svg {
    width: 0px;
    &.option-chosen {
      width: 25px;
    }
    transition: width 0.1s;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  transition: all 0.1s;
`;

const NoResults = styled.span`
  color: var(--color-black);
  user-select: none;
  cursor: default;
  z-index: 1;
`;

const Results = styled.span`
  span.reset-selection {
    color: var(--color-tertiary);
    font-weight: 500;
    cursor: pointer;

    &.disabled {
      color: var(--color-black);
      cursor: default;
      user-select: none;
    }
  }
`;

const ListAndResults = styled.div<{ visible: boolean }>`
  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}

  position: absolute;
  padding-top: 10px;
  width: 290px;
  border-bottom: 4px solid var(--color-secondary);
  z-index: 1;
  background-color: var(--color-white);
  padding: 5px;
  border-radius: 0px 0px 5px 5px;
  z-index: 3;
`;

export const SearchableDropdownStyles = {
  Container,
  List,
  ListWrapper,
  Option,
  NoResults,
  Results,
  ListAndResults,
};
