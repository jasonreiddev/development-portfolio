import { Position } from 'projects/sanity/schemas/position';
import {
  getDateFromAndTo,
  getGBDate,
  getLastWorkedOnOrOngoing,
  getMonthsAndYears,
} from 'projects/helpers/text';
import { dateDifferenceMonths } from 'projects/helpers/number';
import { CardProps } from 'projects/component-library/stories/components/Card/Card';
import { BlogPost } from './contentful/blogPost';
import { ExternalLink } from 'projects/component-library/stories/components/ExternalLink/ExternalLink';
import { Project } from 'projects/sanity/schemas/project';

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

export function mapProjectToCard(project: Project): CardProps {
  const lastWorkedOnOrOngoing = `Project ${getLastWorkedOnOrOngoing(project.lastWorkedOn)}`;
  return {
    title: project.projectTitle,
    flipContent: (
      <>
        <h3>{project.projectTitle}</h3>
        <p>{lastWorkedOnOrOngoing}</p>
        <hr />
        <br />
        <p>{project.details}</p>
        {project.repoUrl && (
          <p>
            <ExternalLink to={project.repoUrl} text="View Repository" />
          </p>
        )}
        {project.siteUrl && (
          <p>
            <ExternalLink to={project.siteUrl} text="View Site" />
          </p>
        )}
      </>
    ),
    tags: project.tags,
    text: `${lastWorkedOnOrOngoing}\n${project.excerpt}`,
  };
}

export function mapBlogPostToCard(blogPost: BlogPost): CardProps {
  blogPost.publishedDate = getGBDate(blogPost.publishedDate);
  return {
    title: blogPost.title,
    url: `blog/${blogPost.slug}`,
    text: `${blogPost.publishedDate}\n${blogPost.excerpt}`,
  };
}

export function mapAlgoliaToCard(portolio: any): CardProps {
  return {
    title: portolio.title,
  };
}
