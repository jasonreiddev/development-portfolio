import { Entry, EntryFields } from 'contentful';
import { client } from './client';

export interface TempoEntry {
  title: EntryFields.Text;
  credit: EntryFields.Text;
  tempoString: EntryFields.Text[];
  id: EntryFields.Text;
}

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
