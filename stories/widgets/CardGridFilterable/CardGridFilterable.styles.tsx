import styled from 'styled-components';

const Wrapper = styled.span`
  overflow: auto;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  gap: 2px;
  max-height: 65px;
  overflow: hidden;
`;

const Tag = styled.div`
  padding: 6px;
  background-color: var(--color-base-semi-bold-80);
  top: 0;
`;

export const CardGridFilterableStyles = {
  Wrapper,
  TagsContainer,
  Tag,
};
