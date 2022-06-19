import styled from 'styled-components';
import { Device, until, ColorPair, useColorPair } from '../../../../helpers/media';

interface CardGridFilterableStylesProps {
  active?: boolean;
  colorPair?: ColorPair;
}

const Wrapper = styled.div`
  overflow: auto;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  overflow: hidden;
`;

const Tag = styled.button<CardGridFilterableStylesProps>`
  padding: 6px;
  border: 0;
  cursor: pointer;

  ${(p: CardGridFilterableStylesProps) => useColorPair(p.colorPair)}

  @media ${until(Device.Tablet)} {
    font-size: 13px;
  }
`;

export const CardGridFilterableStyles = {
  Wrapper,
  TagsContainer,
  Tag,
};
