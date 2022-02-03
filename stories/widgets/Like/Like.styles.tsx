import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  width: 50px;
`;

const Likes = styled.span`
  font-weight: bold;
  svg {
    font-size: 25px;
    transform: translateY(0%);
    cursor: pointer;
    margin: auto;
  }
  div {
    margin: 0;
    height: 20px;
  }
`;

export const LikeStyles = {
  Wrapper,
  Likes,
};
