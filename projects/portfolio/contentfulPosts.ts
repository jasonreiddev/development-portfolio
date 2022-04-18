/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from 'contentful';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: `${space}`,
  accessToken: `${accessToken}`,
});

export async function fetchEntries(): Promise<any> {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
}

export async function fetchEntry(slug: string): Promise<any> {
  console.log(slug); // TODO use this to get correct data
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug[in]': slug,
  });
  if (entries.items) return entries.items[0];
}

export default { fetchEntries };
