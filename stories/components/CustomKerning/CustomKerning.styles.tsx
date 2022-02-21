import styled from 'styled-components';

interface KernGroupStylesProps {
  letterSpacing?: string;
}

const Container = styled.span`
  font-kerning: none;
`;

const KernGroup = styled.span<KernGroupStylesProps>`
  letter-spacing: ${(p: KernGroupStylesProps) => (p.letterSpacing ? `${p.letterSpacing};` : '1px')};
`;

export const CustomKerningStyles = {
  Container,
  KernGroup,
};
