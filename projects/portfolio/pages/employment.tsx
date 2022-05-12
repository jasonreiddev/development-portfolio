import { useContext } from 'react';
import { LayoutContext } from '../../helpers/layoutContext';
import { client } from '../../helpers/client';
import { CardTimeline } from '../../component-library/stories/components/CardTimeline/CardTimeline';
import { CardProps } from '../../component-library/stories/components/Card/Card';
import { Position as SchemaPosition } from 'projects/sanity/schemas/position';
import { getDateFromAndTo, getMonthsAndYears } from 'projects/helpers/text';
import { dateDifferenceMonths } from 'projects/helpers/number';

export interface Position extends SchemaPosition {
  sortDate: Date;
}

interface EmploymentsProps {
  data: Position[];
}

export const getStaticProps = async (): Promise<{ props: EmploymentsProps }> => {
  const res = await client.fetch(
    `
    *[_type == "position" && hideOnEmployment == false]
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
  data.sort(function (a: Position, b: Position) {
    a.sortDate = a.endDate == null ? new Date() : a.endDate;
    b.sortDate = b.endDate == null ? new Date() : b.endDate;
    return new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime();
  });
  data.map((position: Position) => Positions.push(mapPositionToCard(position)));

  return <>{Positions.length > 0 && <CardTimeline cards={Positions} size={300} />}</>;
};

export function mapPositionToCard(position: Position): CardProps {
  const startDate = new Date(position.startDate);
  const endDate = new Date(position.endDate == null ? new Date() : position.endDate);

  const durationMonths = dateDifferenceMonths(startDate, endDate);
  const dateFromAndTo = getDateFromAndTo(startDate, endDate);

  return {
    title: position.jobTitle,
    flipContent: (
      <>
        <h3>{position.jobTitle}</h3>
        <p>
          {dateFromAndTo}
          {durationMonths > 0 && (
            <>
              <br />
              {getMonthsAndYears(durationMonths)}
            </>
          )}
        </p>
        <hr />
        <br />
        <p>{position.details}</p>
      </>
    ),
    text: `${dateFromAndTo}\n${position.details}`,
  };
}

export default Employment;
