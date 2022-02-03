import styled from 'styled-components';

interface IconButtonGroupStylesProps {
  backgroundColor?: string;
}

const ButtonWrapper = styled.div<IconButtonGroupStylesProps>`
  margin: 10px;
`;

export const ButtonGroupStyles = {
  ButtonWrapper,
};
