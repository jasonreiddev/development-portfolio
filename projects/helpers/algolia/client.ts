import algoliasearch, { SearchClient } from 'algoliasearch';

const createAlgoliaClient = (applicationId: string, apiKey: string): SearchClient =>
  algoliasearch(applicationId, apiKey);

export default createAlgoliaClient;
