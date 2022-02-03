import styled from 'styled-components';

const Container = styled.span`
  font-kerning: none;
`;

interface KernGroupStylesProps {
  letterSpacing?: string;
}

const KernGroup = styled.span<KernGroupStylesProps>`
  letter-spacing: ${(p: KernGroupStylesProps) => (p.letterSpacing ? `${p.letterSpacing};` : '1px')};
`;

export const CustomKerningStyles = {
  Container,
  KernGroup,
};
