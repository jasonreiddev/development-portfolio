import { createClient, Entry, EntryFields } from 'contentful';

export interface TempoEntry {
  title: EntryFields.Text;
  credit: EntryFields.Text;
  tempoString: EntryFields.Text[];
  id: EntryFields.Text;
}

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: `${space}`,
  accessToken: `${accessToken}`,
});

export async function fetchDefaultEntry(): Promise<Entry<TempoEntry> | undefined> {
  return fetchEntry('default');
}

export async function fetchEntry(id: string): Promise<Entry<TempoEntry> | undefined> {
  const entries = await client.getEntries<TempoEntry>({
    content_type: 'tempoString',
    'fields.id[in]': id,
  });
  if (entries.items) return entries.items[0];
}

export default { fetchDefaultEntry };
