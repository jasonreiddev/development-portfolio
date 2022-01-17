import styled from 'styled-components';
import { Device, from } from '../../../helpers/media';
import { Props } from './Legend';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media ${from(Device.MobileLarge)} {
    flex-direction: row;
  }
`;

const LegendPair = styled.div`
  margin-top: 0.5em;
  flex: 1;
  display: flex;
  min-width: fit-content;
  align-items: center;
  margin-right: 0.5em;
`;

const Key = styled.span<Props>`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.level) {
      case 'Primary': {
        return 'var(--color-primary)';
      }
      case 'Secondary': {
        return 'var(--color-secondary)';
      }
      case 'Tertiary': {
        return 'var(--color-tertiary)';
      }
    }
  }};
`;

const Title = styled.span`
  font-size: 1rem;
  letter-spacing: 0.16px;
`;

export const LegendStyles = {
  Key,
  Container,
  Title,
  LegendPair,
};
