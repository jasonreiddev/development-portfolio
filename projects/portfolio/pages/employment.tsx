import { useContext } from 'react';
import { LayoutContext } from '../../helpers/layoutContext';
import { client } from '../../helpers/client';
import { CardTimeline } from '../../component-library/stories/components/CardTimeline/CardTimeline';
import { CardProps } from '../../component-library/stories/components/Card/Card';
import { Position as SchemaPosition } from 'projects/sanity/schemas/position';

interface Position extends SchemaPosition {
  sortDate: Date;
  dates: string;
}

type EmploymentsProps = { data: Position[] };

export const getStaticProps = async (): Promise<{ props: EmploymentsProps }> => {
  const res = await client.fetch(
    `
    *[_type == "position"]
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
  const { updatePageTitle } = useContext(LayoutContext);
  updatePageTitle && updatePageTitle('Employment');

  const Positions: CardProps[] = [];
  data.sort(function (a: Position, b: Position) {
    // by desc endDate // TODO add start date
    a.sortDate = a.endDate == null ? new Date() : a.endDate;
    b.sortDate = b.endDate == null ? new Date() : b.endDate;
    return new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime();
  });
  // TODO Calculate Length
  data.map((position: Position) => {
    if (!position.hideOnEmployment) {
      position.dates = `${new Date(position.startDate).toLocaleDateString('en-GB', {
        month: 'long',
        year: 'numeric',
      })} - ${
        position.endDate == null
          ? `Present`
          : `${new Date(position.endDate).toLocaleDateString('en-GB', {
              month: 'long',
              year: 'numeric',
            })}.`
      }`;
      Positions.push({
        title: position.jobTitle,
        flipContent: (
          <>
            {/* TODO Include organisation info */}
            {/* <h3>{`${position.jobTitle} | ${position.organisation.organisation}`}</h3> */}
            <h3>{position.jobTitle}</h3>
            <p>{position.dates}</p>
            <hr />
            <br />
            <p>{position.details}</p>
          </>
        ),
        text: `${position.dates}\n${position.details}`,
      });
    }
  });
  return <>{Positions.length > 0 && <CardTimeline cards={Positions} size={300} />}</>;
};

export default Employment;
