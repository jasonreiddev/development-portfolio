import styled from 'styled-components';

interface ContactCardPageStylesProps {
  backgroundColor: string;
}

export const ContactCardPageStyles = styled.article<ContactCardPageStylesProps>`
  background-color: ${(p: ContactCardPageStylesProps) =>
    p.backgroundColor ? `${p.backgroundColor};` : 'var(--color-primary)'};
  height: 100vh;
  padding 10px;
`;
