import styled from 'styled-components';

const Container = styled.a`
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border: none;
  font-size: 13px;
  flex-wrap: wrap;
  color: var(--color-contrast);
  background-color: var(--color-primary);
  position: relative;

  img {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  padding: 8px;
  background-color: var(--color-base-semi-bold-80);
`;

const TagsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  top: 0;
  width: 200px;
  gap: 2px;
  max-height: 65px;
  overflow: hidden;
`;

const Tag = styled.div`
  padding: 6px;
  background-color: var(--color-base-semi-bold-80);
  top: 0;
`;

export const CardStyles = {
  Container,
  TagsContainer,
  Tag,
  Content,
};
