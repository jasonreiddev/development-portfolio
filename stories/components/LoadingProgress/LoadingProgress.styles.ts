import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 3;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.span`
  text-align: center;
  font-size: 25px;
`;

const Spinner = styled.img`
  height: 150px;
`;

const Progress = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  span {
    font-size: 20px;
    text-align: center;
  }
`;

const Log = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 140px;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
  
  span {
    font-size: 17px;
    padding: 3px 0px;
  }
`;

export const LoadingProgressStyles = {
  Container,
  Loading,
  Spinner,
  Progress,
  Log
};