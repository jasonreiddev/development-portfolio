import { FunctionComponent, ReactNode } from 'react';
import { ModalStyles } from './Modal.styles';
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
      <ModalStyles.Mask active={active} />
      <span ref={modalRef}>
        <ModalStyles.Open hasIcon={openIcon !== 0}>
          <div onClick={toggleActive}>
            {openIcon && renderIcon(openIcon)}
            <span>{openText}</span>
          </div>
        </ModalStyles.Open>
        <ModalStyles.Modal active={active}>
          <ModalStyles.CloseContainer>
            <ModalStyles.Close>
              <MdClose onClick={toggleActive} />
            </ModalStyles.Close>
          </ModalStyles.CloseContainer>
          <ModalStyles.TitleContainer>
            <ModalStyles.Title>{title}</ModalStyles.Title>
          </ModalStyles.TitleContainer>
          <ModalStyles.Body>
            <ModalStyles.SubTitleContainer>
              <h3>{subtitle}</h3>
            </ModalStyles.SubTitleContainer>
            {children}
          </ModalStyles.Body>
        </ModalStyles.Modal>
      </span>
    </>
  );
};

export default Modal;
