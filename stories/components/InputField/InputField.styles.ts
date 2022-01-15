import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.25em;
`;

const Title = styled.span`
  margin-bottom: 5px;
`;

const Input = styled.div`
  position: relative;

  input {
    width: 100%;
    min-height: 40px;
    border: 1px solid var(--color-black);
    border-radius: 5px;
    padding: 0px 10px;

    ::placeholder {
      color: var(--color-primary);
      font-weight: 500;
    }
  }

  svg {
    stroke: var(--color-primary);
    color: var(--color-primary);
    font-size: 2rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) translateX(-10%);

    :hover {
      cursor: pointer;
    }
  }
`;

export const InputFieldStyles = {
  Container,
  Input,
  Title,
};
