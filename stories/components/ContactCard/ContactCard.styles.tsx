import styled from "styled-components";

export const ContactCardStyles = styled.article`
  min-width: 250px;
  border-radius: 32px;
  padding: 24px;
  background: white;
  box-shadow: 0px 2px 20px hsl(248deg 53% 40%);
  text-align: center;

  max-width: 500px;
  margin: auto;
  margin-top: 40px;
  border-radius: 32px;

  .avatar {
    display: block;
    width: 128px;
    height: 128px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -64px;
    margin-bottom: 16px;
    border: 6px solid white;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0px;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    color: hsl(0deg 0% 40%);
  }
`;
