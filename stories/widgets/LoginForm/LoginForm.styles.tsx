import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
`;

const Input = styled.input`
  display: block;
  width: 175px;
  border: 1px solid var(--color-black);
  border-bottom-width: 2px;
  padding: 6px 8px;
  margin-top: 4px;
  border-radius: var(--border-radius);

  &:focus {
    outline: 3px auto var(--color-primary);
    outline-offset: 2px;
    border-color: transparent;
  }
`;

const ButtonWrapper = styled.span`
  &[type='submit'] {
    margin-top: 40px;
    width: 100%;
  }

  &[type='submit']:focus {
    background: var(--color-primary);
    outline-offset: 2px;
  }
`;

export const LoginFormStyles = {
  Label,
  Input,
  ButtonWrapper,
};
