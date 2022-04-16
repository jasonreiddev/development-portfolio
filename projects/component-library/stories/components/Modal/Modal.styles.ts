import styled from 'styled-components';

import { from, Device } from '../../../../helpers/media';

const Modal = styled.div<{ active: boolean }>`
  @media (prefers-reduced-motion: no-preference) {
    transition: 0.15s ease-in;
  }
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 5em auto auto;
  max-width: 720px;
  width: min(calc(80% - 10px), calc(80vw - 10px));
  aspect-ratio: 1 / 1;
  background: var(--color-base);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  z-index: 100;
  visibility: hidden;
  opacity: 0;
  ${(p) =>
    p.active
      ? `
      visibility: visible;
      opacity: 1;
      `
      : null};
`;

const Mask = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-contrast);
  z-index: 50;
  visibility: hidden;
  opacity: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: 0.7s;
  }

  ${(p) =>
    p.active
      ? `
      visibility: visible;
      opacity: 0.4;
      `
      : null}
`;

const TitleContainer = styled.div`
  text-align: center;
  padding: 1em 0 0.5em;
  background-color: var(--color-secondary);
`;

const Title = styled.div`
  color: var(--color-contrast);
  font-weight: bold;
  font-size: 30px;
  @media ${from(Device.Tablet)} {
    font-size: 40px;
  }
`;

const CloseContainer = styled.div`
  text-align: right;
  background-color: var(--color-secondary);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
`;

const Close = styled.div`
  font-size: 30px;
  color: var(--color-contrast);
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
    margin: 10px;
  }
`;

const Body = styled.div`
  padding: 1em;
  background: var(--color-base);
`;
const SubTitleContainer = styled.div`
  text-align: center;
  font-size: 20px;
  color: black;
`;

const Open = styled.div<{ hasIcon: boolean }>`
  color: var(--color-contrast);
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding: 0.5em;

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

export const ModalStyles = {
  Modal,
  Mask,
  TitleContainer,
  Title,
  CloseContainer,
  Close,
  Body,
  SubTitleContainer,
  Open,
};
