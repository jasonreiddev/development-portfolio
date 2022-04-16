import { useContext } from 'react';
import { LayoutContext } from '../../helpers/layoutContext';
import { client } from '../../helpers/client';
import { CardGridFilterable } from '../../component-library/stories/widgets/CardGridFilterable/CardGridFilterable';
import { CardProps } from '../../component-library/stories/components/Card/Card';
import { Project as SchemaProject } from 'projects/sanity/schemas/project';

interface Project extends SchemaProject {
  sortDate: Date;
  endDate: string;
}

type ProjectsProps = { data: Project[] };

export const getStaticProps = async (): Promise<{ props: ProjectsProps }> => {
  const res = await client.fetch(
    `
    *[_type == "project"]
  `,
  );
  const data = await res;

  return {
    props: {
      data,
    },
  };
};

const Projects = ({ data }: ProjectsProps): JSX.Element => {
  const { updatePageTitle } = useContext(LayoutContext);
  updatePageTitle && updatePageTitle('Projects');

  const Projects: CardProps[] = [];
  data.sort(function (a: Project, b: Project) {
    // by desc lastWorkedOn
    a.sortDate = a.lastWorkedOn == null ? new Date() : a.lastWorkedOn;
    b.sortDate = b.lastWorkedOn == null ? new Date() : b.lastWorkedOn;
    return new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime();
  });
  data.map((project: Project) => {
    project.endDate =
      project.lastWorkedOn == null
        ? `Project Ongoing`
        : `Project last worked on ${new Date(project.lastWorkedOn).toLocaleDateString('en-GB', {
            month: 'long',
            year: 'numeric',
          })}.`;
    Projects.push({
      title: project.projectTitle,
      flipContent: (
        <>
          <h3>{project.projectTitle}</h3>
          {/* TODO Include organisation info */}
          {/* <p className="organisation">
            {!project.position.hideOnEmployment ? (
              <span>
                <a href={`/employment/${project.position.slug.current}`}>
                  {project.position.jobTitle}
                </a>
                &nbsp;-&nbsp;
                {project.position.organisation.organisation}
              </span>
            ) : (
              project.position.organisation.organisation
            )}
          </p> */}
          <p>{project.endDate}</p>
          <hr />
          <br />
          <p>{project.details}</p>
          {project.repoUrl && (
            <p>
              <a href={project.repoUrl}>View Repository</a>
            </p>
          )}
          {project.siteUrl && (
            <p>
              <a href={project.siteUrl}>View Site</a>
            </p>
          )}
        </>
      ),
      tags: project.tags,
      text: `${project.endDate}\n${project.excerpt}`,
    });
  });

  return <>{Projects.length > 0 && <CardGridFilterable cards={Projects} size={300} />}</>;
};

export default Projects;
