import styled from 'styled-components';

export const LoginFormStyles = styled.form`
  width: max-content;
  margin: 16px auto;
  border: 1px dotted silver;
  padding: 26px 32px 32px;
  border-radius: 2px;

  & label {
    display: block;
    margin-bottom: 16px;
  }

  input {
    display: block;
    width: 175px;
    border: 1px solid black;
    border-bottom-width: 2px;
    padding: 6px 8px;
    margin-top: 4px;
    border-radius: 2px 2px 3px 3px;
  }

  input:focus {
    outline: 3px auto var(--color-primary);
    outline-offset: 2px;
    border-color: transparent;
  }

  button[type='submit'] {
    display: block;
    margin-top: 40px;
    width: 100%;
    background: black;
    color: white;
    padding: 8px;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
  }

  button[type='submit']:focus {
    outline: 3px auto var(--color-primary);
    background: var(--color-primary);
    outline-offset: 2px;
  }
`;
