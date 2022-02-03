import { FunctionComponent, ReactNode } from 'react';
import { ModalStyles as s } from './Modal.styles';
import { MdClose } from 'react-icons/md';
import { MdAccountCircle } from 'react-icons/md';

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
  modalRef: React.Ref<HTMLElement>;
}

const renderIcon = (icon: Icon): ReactNode => {
  switch (icon) {
    case Icon.None:
      return;
    case Icon.Account:
      return <MdAccountCircle />;
  }
};

export const Modal: FunctionComponent<ModalProps> = ({
  openText,
  openIcon,
  title,
  subtitle,
  children,
  active,
  toggleActive,
  modalRef,
}) => {
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
        <s.Modal active={active}>
          <s.CloseContainer>
            <s.Close>
              <MdClose onClick={toggleActive} />
            </s.Close>
          </s.CloseContainer>
          <s.TitleContainer>
            <s.Title>{title}</s.Title>
          </s.TitleContainer>
          <s.Body>
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
