import styled from 'styled-components';
import { clamp } from '../../../helpers/media';

const Footer = styled.footer`
  min-height: 100px;
  background-color: var(--color-secondary);
  display: flex;
  color: var(--color-base);
  font-size: ${clamp({ multiplier: 0.5 })};
`;

const Title = styled.a`
  display: flex;
  flex: 1;
  font-size: 1.5rem;
  justify-self: flex-start;
  align-items: center;
  margin-left: 10%;
  font-weight: bold;

  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }

  a {
    color: var(--color-base);
    text-decoration: none;
  }
`;

const Icon = styled.span`
  display: flex;
  font-size: 3rem;
  justify-self: flex-end;
  align-items: center;
  margin-right: 10%;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.2s;
  }

  svg {
    cursor: pointer;
    width: 1.5em;
    &:hover {
      height: 1.5em;
    }
  }
`;

export const FooterStyles = {
  Footer,
  Title,
  Icon,
};
