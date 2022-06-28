import { SearchIndex } from 'algoliasearch';
import indexer, { flattenBlocks } from 'sanity-algolia';
import createAlgoliaClient from './client';
import { client as sanityClient } from '../sanity/client';

const algoliaClient = createAlgoliaClient();

export const INDEX_NAME = 'site-search';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createIndex = async (): Promise<SearchIndex> => {
  const algoliaIndex = algoliaClient.initIndex(INDEX_NAME);

  // Update index settings.
  algoliaIndex.setSettings({
    attributesForFaceting: ['pageType', 'tags'],
    attributesToSnippet: ['summary'],
    indexLanguages: ['en'],
    queryLanguages: ['en'],
    searchableAttributes: ['title', 'summary'],
  });

  return algoliaIndex;
};

export default function handler(req: any, res: any): Promise<SearchIndex> {
  const sanityAlgolia = indexer(
    {
      post: {
        index: algoliaClient.initIndex('project'),
      },
    },
    (document) => {
      switch (document._type) {
        case 'project':
          return {
            title: document.title,
            path: document.slug.current,
            excerpt: flattenBlocks(document.excerpt),
          };
        default:
          throw new Error(`Unknown type: ${document.type}`);
      }
    },
  );

  return sanityAlgolia.webhookSync(sanityClient, req.body).then(() => res.status(200).send('ok'));
}
