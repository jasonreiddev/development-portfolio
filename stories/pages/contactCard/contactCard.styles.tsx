import styled from 'styled-components';

interface ContactCardPageStylesProps {
  backgroundColor: string;
}

const Wrapper = styled.article<ContactCardPageStylesProps>`
  background-color: ${(p: ContactCardPageStylesProps) =>
    p.backgroundColor ? `${p.backgroundColor};` : 'var(--color-primary)'};
  height: 100vh;
  padding 10px;
`;
export const ContactCardStyles = {
  Wrapper,
};
