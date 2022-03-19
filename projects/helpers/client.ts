import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'a3mxaqcs',
  dataset: 'production',
  useCdn: true,
});
