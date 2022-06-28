import algoliasearch, { SearchClient } from 'algoliasearch';

const createAlgoliaClient = (): SearchClient =>
  algoliasearch(process.env.ALGOLIA_APPLICATION_ID ?? '', process.env.ALGOLIA_ADMIN_API_KEY ?? '');

export default createAlgoliaClient;
