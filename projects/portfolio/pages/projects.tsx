import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import { LayoutContext } from '../../helpers/layoutContext';
import { client } from '../../helpers/client';
import { CardGridFilterable } from '../../component-library/stories/widgets/CardGridFilterable/CardGridFilterable';
import { CardProps } from '../../component-library/stories/components/Card/Card';

const Projects: NextPage = () => {
  const { updatePageTitle } = useContext(LayoutContext);
  updatePageTitle && updatePageTitle('Projects');

  const [cards, setCards] = useState<CardProps[]>([]);
  useEffect(() => {
    const fetchProjects = async (): Promise<any> => {
      const promise = await client.fetch(
        `
        *[_type == "project"]
      `,
      );
      const response = await promise;
      const Projects: CardProps[] = [];
      response.sort(function (a: any, b: any) {
        // by desc lastWorkedOn
        a.sortDate = a.lastWorkedOn == null ? Date.now() : a.lastWorkedOn;
        b.sortDate = b.lastWorkedOn == null ? Date.now() : b.lastWorkedOn;
        return new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime();
      });
      response.map((project: any) => {
        Projects.push({
          title: project.projectTitle,
          tags: project.tags,
          text: `${
            project.lastWorkedOn == null
              ? `Project Ongoing`
              : `Project last worked on ${new Date(project.lastWorkedOn).toLocaleDateString(
                  'en-GB',
                  {
                    month: 'long',
                    year: 'numeric',
                  },
                )}.`
          }\n${project.excerpt}`,
        });
      });
      setCards([...cards, ...Projects]);
    };
    fetchProjects();
  }, []);

  return (
    <>
      <h2>Projects</h2>
      {cards.length > 0 && <CardGridFilterable cards={cards} size={300} />}
    </>
  );
};

export default Projects;
