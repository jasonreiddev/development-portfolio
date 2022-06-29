import { createIndex, createIndexer } from '../../algolia/indexers/site';
import { client as sanityClient } from '../../../helpers/sanity/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseBody = Record<string, any> & { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>,
): Promise<ResponseBody | void> {
  const index = await createIndex();

  const indexer = createIndexer(index);

  // Get Sanity documents IDs.
  const ids = await sanityClient.fetch<string[]>(
    `*[
      _type == "organisation" && organisation != "Jason Reid"
      || _type == "position" && hideOnEmployment == false
      || _type == "project"
    ]._id`,
  );

  // Index documents
  await indexer.webhookSync(sanityClient, { ids: { created: ids, updated: [], deleted: [] } });

  // Return response
  return res.status(200).json({ message: `Processed ${ids.length} IDs`, ids: ids });
}
