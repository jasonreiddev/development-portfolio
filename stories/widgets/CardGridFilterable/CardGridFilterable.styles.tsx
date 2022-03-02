import styled from 'styled-components';

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
       var(--color-primary);
        `
      : `
       var(--color-base-semi-bold-80);
        `};
`;

export const CardGridFilterableStyles = {
  Wrapper,
  TagsContainer,
  Tag,
};
