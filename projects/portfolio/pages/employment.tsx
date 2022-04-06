import { useContext } from 'react';
import { LayoutContext } from '../../helpers/layoutContext';
import { client } from '../../helpers/client';
import { CardTimeline } from '../../component-library/stories/components/CardTimeline/CardTimeline';
import { CardProps } from '../../component-library/stories/components/Card/Card';

type EmploymentsProps = { data: any };

export const getStaticProps = async () => {
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

const Employment = ({ data }: EmploymentsProps) => {
  const { updatePageTitle } = useContext(LayoutContext);
  updatePageTitle && updatePageTitle('Employment');

  const Positions: CardProps[] = [];
  data.sort(function (a: any, b: any) {
    // by desc endDate // TODO add start date
    a.endDate = a.endDate == null ? Date.now() : a.endDate;
    b.endDate = b.endDate == null ? Date.now() : b.endDate;
    return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
  });
  // TODO Calculate Length
  data.map((position: any) => {
    if (!position.hideOnEmployment) {
      position.startDate = new Date(position.endDate).toLocaleDateString('en-GB', {
        month: 'long',
        year: 'numeric',
      });
      position.endDate =
        position.endDate == null
          ? `Present `
          : `${new Date(position.endDate).toLocaleDateString('en-GB', {
              month: 'long',
              year: 'numeric',
            })}.`;
      Positions.push({
        title: position.jobTitle,
        flipContent: (
          <>
            {/* TODO Include organisation info */}
            {/* <h3>{`${position.jobTitle} | ${position.organisation.organisation}`}</h3> */}
            <h3>{position.jobTitle}</h3>
            <p>
              {position.startDate} - {position.endDate}
            </p>
            <hr />
            <br />
            <p>{position.details}</p>
          </>
        ),
        text: `${position.startDate} - ${position.endDate}\n${position.details}`,
      });
    }
  });
  return <>{Positions.length > 0 && <CardTimeline cards={Positions} size={300} />}</>;
};

export default Employment;
