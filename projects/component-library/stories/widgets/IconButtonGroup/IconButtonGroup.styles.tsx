import styled from 'styled-components';

interface IconButtonGroupStylesProps {
  backgroundColor?: string;
}

const ButtonWrapper = styled.div<IconButtonGroupStylesProps>`
  display: flex;
  gap: clamp(8px, 1vw, 24px);
`;

export const ButtonGroupStyles = {
  ButtonWrapper,
};
