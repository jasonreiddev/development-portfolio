import styled from 'styled-components';

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  border: none;
  font-size: 13px;
  flex-wrap: wrap;
  color: var(--color-contrast);
  margin: 0 35px;
`;

const BreadcrumbGroup = styled.div`
  display: flex;
  align-items: center;
`;

const BreadcrumbItem = styled.a<{ first?: boolean }>`
  padding: 0 1em;
  color: var(--color-contrast);
  text-decoration: none;
  line-height: 1.5;
  text-transform: capitalize;

  ${(p) =>
    p.first
      ? `
      padding-left: 0;
      `
      : null}
`;

const CopyButton = styled.button`
  font-size: 15px;
  cursor: copy;
  svg {
    color: var(--color-contrast);
  }
`;

export const BreadcrumbStyles = {
  Breadcrumb,
  BreadcrumbGroup,
  BreadcrumbItem,
  CopyButton,
};
