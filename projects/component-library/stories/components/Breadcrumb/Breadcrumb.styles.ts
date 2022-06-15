import styled from 'styled-components';

import { ColorPair, useColorPair, useContrast } from '../../../../helpers/media';

interface BreadcrumbStylesProps {
  first?: boolean;
  colorPair?: ColorPair;
}

const Breadcrumb = styled.div<BreadcrumbStylesProps>`
  display: flex;
  align-items: center;
  border: none;
  flex-wrap: wrap;
  margin: 0 35px;
  ${(p: BreadcrumbStylesProps) => useColorPair(p.colorPair, '10pt')}
`;

const BreadcrumbGroup = styled.div`
  display: flex;
  align-items: center;
`;

const BreadcrumbItem = styled.a<BreadcrumbStylesProps>`
  padding: 0 1em;
  color: ${(p: BreadcrumbStylesProps) => useContrast(p.colorPair)};
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

const CopyButton = styled.button<BreadcrumbStylesProps>`
  background: none;
  border: 0;
  padding: 0;
  font-size: 15px;
  cursor: copy;
  svg {
    color: ${(p: BreadcrumbStylesProps) => useContrast(p.colorPair)};
  }
`;

export const BreadcrumbStyles = {
  Breadcrumb,
  BreadcrumbGroup,
  BreadcrumbItem,
  CopyButton,
};
