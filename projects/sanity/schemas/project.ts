import { MdKeyboard as icon } from 'react-icons/md';

export interface Project {
  projectTitle: string;
  siteUrl: string;
  repoUrl: string;
  position: string;
  lastWorkedOn: Date;
  slug: string;
  details: string;
  tags: string[];
  excerpt: string;
}

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon,
  fields: [
    {
      name: 'projectTitle',
      title: 'Project Title',
      type: 'string',
      description: 'What is the projects name?',
    },
    {
      name: 'siteUrl',
      title: 'Site URL',
      type: 'string',
      description: 'URL to live site',
    },
    {
      name: 'repoUrl',
      title: 'Repo URL',
      type: 'string',
      description: 'URL to repository',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'reference',
      to: [{ type: 'position' }],
      description: 'What is the associated Position?',
    },
    {
      title: 'Last worked on',
      name: 'lastWorkedOn',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
        calendarTodayLabel: 'Today',
      },
      description: 'When was this last worked on? (Best estimation)',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      description: 'Slug to navigate to this page',
      options: {
        source: 'projectTitle',
        maxLength: 100,
      },
    },
    {
      name: 'details',
      title: 'Details',
      type: 'text',
      description: 'Details about the project',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
          maxLength: 25,
        },
      ],
      description: 'Tags for filtering and searching',
      options: {
        source: 'details',
        maxLength: 100,
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
      description: 'Excerpt to be shown in project listing',
      options: {
        source: 'details',
        maxLength: 100,
      },
    },
  ],
  preview: {
    select: {
      projectTitle: 'projectTitle',
    },
    prepare: (fields: { projectTitle: string }): { title: string } => ({
      title: `${fields.projectTitle}`,
    }),
  },
};
