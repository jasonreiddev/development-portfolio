import styled from 'styled-components';

const Wrapper = styled.span`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const MediaLinks = styled.span`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  font-size: 30px;
  svg {
    height: 30px;
    width: 30px;
  }
  a {
    display: flex;
  }
`;

export const Text = styled.span`
  text-align: center;
`;

export const FooterCardStyles = {
  Wrapper,
  MediaLinks,
  Text,
};
