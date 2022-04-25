import styled from 'styled-components';

export const Link = styled.a`
  white-space: nowrap;
  display: inline-flex;
  color: var(--color-tertiary);
  align-items: baseline;
  position: relative;

  svg {
    transform: translateY(2px);
    margin-right: 2px;
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: var(--color-contrast);
    @media (prefers-reduced-motion: no-preference) {
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }
    width: 0;
  }
  &:hover :after and (pointer: fine) {
    width: 100%;
    left: 0;
  }
}
`;

export const ExternalLinkStyles = {
  Link,
};
