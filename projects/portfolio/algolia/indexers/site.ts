import { SearchIndex } from 'algoliasearch';
import type { SanityDocumentStub } from '@sanity/client';
import indexer from 'sanity-algolia';
import createAlgoliaClient from '../../../helpers/algolia/client';

const algoliaClient = createAlgoliaClient(
  process.env.ALGOLIA_APPLICATION_ID ?? '',
  process.env.ALGOLIA_ADMIN_API_KEY ?? '',
);

export const INDEX_NAME = 'portfolio';

export const createIndex = async (): Promise<SearchIndex> => {
  const algoliaIndex = algoliaClient.initIndex(INDEX_NAME);

  // Index settings
  algoliaIndex.setSettings({
    attributesForFaceting: ['type', 'current', 'organisation', 'position'],
    indexLanguages: ['en'],
    queryLanguages: ['en'],
    searchableAttributes: ['title', 'organisation', 'position'],
  });

  return algoliaIndex;
};

// Used in site-full api endpoint to index documents
export const createIndexer = (index: SearchIndex): typeof sanityAlgolia => {
  // Create indexer
  const sanityAlgolia = indexer(
    {
      organisation: {
        index: index,
        projection: `{
          currentEmployer,
          organisation,
        }`,
      },
      position: {
        index: index,
        projection: `{
          jobTitle,
          currentJob,
          organisation -> {
            organisation,
          }
        }`,
      },
      project: {
        index: index,
        projection: `{
          projectTitle,
          lastWorkedOn,
          position -> {
            jobTitle,
            organisation -> {
              organisation,
            }
          }
        }`,
      },
    },

    // Map Sanity documents to Algolia records
    (document: SanityDocumentStub) => {
      switch (document._type) {
        case 'organisation':
          return {
            title: document.organisation,
            current: document.currentEmployer,
            organisation: document.organisation,
            type: 'organisation',
          };
        case 'position':
          return {
            title: document.jobTitle,
            current: document.currentJob,
            position: document.jobTitle,
            organisation: document.organisation.organisation,
            type: 'position',
          };
        case 'project':
          return {
            title: document.projectTitle,
            current: document.lastWorkedOn ? false : true,
            lastWorkedOn: document.lastWorkedOn,
            position: document.position?.jobTitle ?? '',
            organisation: document.position?.organisation.organisation ?? '',
            type: 'project',
          };

        default:
          throw new Error(`Unknown type: ${document.type}`);
      }
    },
  );

  return sanityAlgolia;
};
