import { Ref } from 'react';
import { MdClose, MdAccountCircle } from 'react-icons/md';

import { ModalStyles as s } from './Modal.styles';
import { ColorPair } from 'helpers/media';

export enum Icon {
  None,
  Account,
}

export interface ModalProps {
  openText: string;
  openIcon?: Icon;
  title: string;
  subtitle: string;
  children?: JSX.Element | string;
  active: boolean;
  toggleActive: VoidFunction;
  modalRef: Ref<HTMLElement>;
  colorPair?: ColorPair;
}

const renderIcon = (icon: Icon): JSX.Element | undefined => {
  switch (icon) {
    case Icon.None:
      return;
    case Icon.Account:
      return <MdAccountCircle />;
  }
};

export const Modal = ({
  openText,
  openIcon,
  title,
  subtitle,
  children,
  active,
  toggleActive,
  modalRef,
  colorPair = ColorPair.Secondary,
}: ModalProps): JSX.Element => {
  return (
    <>
      <s.Mask active={active} />
      <span ref={modalRef}>
        <s.Open hasIcon={openIcon !== 0}>
          <div onClick={toggleActive}>
            {openIcon && renderIcon(openIcon)}
            <span>{openText}</span>
          </div>
        </s.Open>
        <s.Modal active={active} colorPair={colorPair}>
          <s.CloseContainer colorPair={colorPair}>
            <s.Close>
              <MdClose onClick={toggleActive} />
            </s.Close>
          </s.CloseContainer>
          <s.TitleContainer colorPair={colorPair}>
            <s.Title>{title}</s.Title>
          </s.TitleContainer>
          <s.Body colorPair={colorPair}>
            <s.SubTitleContainer>
              <h3>{subtitle}</h3>
            </s.SubTitleContainer>
            {children}
          </s.Body>
        </s.Modal>
      </span>
    </>
  );
};

export default Modal;
