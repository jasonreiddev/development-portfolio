import { useContext } from 'react';
import { LayoutContext } from '../../helpers/layoutContext';
import { client } from '../../helpers/sanity/client';
import { CardTimeline } from '../../component-library/stories/components/CardTimeline/CardTimeline';
import { CardProps } from '../../component-library/stories/components/Card/Card';
import { mapPositionToCard } from 'projects/helpers/mapToCard';
import { Position } from 'projects/sanity/schemas/position';

interface EmploymentsProps {
  data: Position[];
}

export const getStaticProps = async (): Promise<{ props: EmploymentsProps }> => {
  const res = await client.fetch(
    `
    *[_type == "position" && hideOnEmployment == false] | order(endDate desc)
  `,
  );
  const data = await res;

  return {
    props: {
      data,
    },
  };
};

const Employment = ({ data }: EmploymentsProps): JSX.Element => {
  const { updatePageTitle, updatePageDescription } = useContext(LayoutContext);
  updatePageTitle?.('Employment');
  updatePageDescription?.('Employment history');

  const Positions: CardProps[] = [];
  data.map((position: Position) => Positions.push(mapPositionToCard(position)));

  return <>{Positions.length > 0 && <CardTimeline cards={Positions} size={280} />}</>;
};

export default Employment;
