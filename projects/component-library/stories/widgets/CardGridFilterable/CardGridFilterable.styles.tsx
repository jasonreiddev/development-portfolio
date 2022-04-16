import styled from 'styled-components';
import { Device, until } from '../../../../helpers/media';

interface CardGridFilterableStylesProps {
  active: boolean;
}

const Wrapper = styled.span`
  overflow: auto;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  gap: 2px;
  overflow: hidden;
`;

const Tag = styled.button<CardGridFilterableStylesProps>`
  padding: 6px;
  border: 0;
  cursor: pointer;

  background-color: ${(p) =>
    p.active
      ? `
       var(--color-secondary);
        `
      : `
       var(--color-base-semi-bold-o66);
        `};

  @media ${until(Device.Tablet)} {
    font-size: 13px;
  }
`;

export const CardGridFilterableStyles = {
  Wrapper,
  TagsContainer,
  Tag,
};
