import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import { LayoutContext } from '../../helpers/layoutContext';
import { client } from '../../helpers/client';
import { CardTimeline } from '../../component-library/stories/components/CardTimeline/CardTimeline';
import { CardProps } from '../../component-library/stories/components/Card/Card';

const Employment: NextPage = () => {
  const { updatePageTitle } = useContext(LayoutContext);
  updatePageTitle && updatePageTitle('Employment');

  const [cards, setCards] = useState<CardProps[]>([]);
  useEffect(() => {
    const fetchPositions = async (): Promise<any> => {
      const promise = await client.fetch(
        `
        *[_type == "position"]
      `,
      );
      const response = await promise;
      const Positions: CardProps[] = [];
      response.sort(function (a: any, b: any) {
        // by desc endDate // TODO add start date
        a.endDate = a.endDate == null ? Date.now() : a.endDate;
        b.endDate = b.endDate == null ? Date.now() : b.endDate;
        return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
      });
      // TODO Calculate Length
      response.map((position: any) => {
        if (!position.hideOnEmployment) {
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
            text: `${position.startDate} - ${position.endDate}\n${position.preview}`,
          });
        }
      });
      setCards([...Positions]);
    };
    fetchPositions();
  }, []);

  return (
    <>
      <h2>Employment</h2>
      {cards.length > 0 && <CardTimeline cards={cards} size={300} />}
    </>
  );
};

export default Employment;
