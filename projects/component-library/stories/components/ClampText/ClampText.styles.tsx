import styled from 'styled-components';

interface ClampTextStylesProps {
  lines?: number;
}

const Wrapper = styled.span`
  // Wrapper prevents issues with Flex and Grid
`;

const ClampText = styled.span<ClampTextStylesProps>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(p: ClampTextStylesProps) => (p.lines ? `${p.lines};` : '')};
  overflow: hidden;
`;

export const ClampTextStyles = {
  Wrapper,
  ClampText,
};
