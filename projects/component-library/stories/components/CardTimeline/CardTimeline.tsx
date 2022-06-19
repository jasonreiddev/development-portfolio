import { CardTimelineStyles as s } from './CardTimeline.styles';
import { Card, CardProps } from '../Card/Card';
import { ColorPair } from '../../../../helpers/media';

export interface CardTimelineProps {
  cards: CardProps[];
  size?: number;
  colorPair?: ColorPair;
}

export const CardTimeline = ({
  cards,
  size = 200,
  colorPair = ColorPair.Secondary,
}: CardTimelineProps): JSX.Element => {
  return (
    <>
      <s.Container size={size} colorPair={colorPair}>
        {cards &&
          cards.map((card, index) => {
            return <Card {...card} modifyWidth={1} key={`Card${index}`} colorPair={colorPair} />;
          })}
        <s.Line size={size} colorPair={colorPair} />
      </s.Container>
    </>
  );
};
