import { Asset, Entry, EntryFields } from 'contentful';
import { client } from './client';

interface ContentfulBlogPost {
  title: EntryFields.Text;
  slug: EntryFields.Text;
  excerpt: EntryFields.Text;
  publishedDate: EntryFields.Text;
  featuredImage: Asset;
  body: EntryFields.RichText;
}

export interface BlogPost extends ContentfulBlogPost {
  endDate: string;
}

export async function fetchEntries(limit?: number): Promise<Entry<BlogPost>[]> {
  const entries = await client.getEntries<BlogPost>({
    limit: limit,
    content_type: 'blogPost',
  });
  if (entries.items) return entries.items;
  return [];
}

export async function fetchEntry(slug: string): Promise<Entry<BlogPost> | undefined> {
  const entries = await client.getEntries<BlogPost>({
    content_type: 'blogPost',
    'fields.slug[in]': slug,
  });
  if (entries.items) return entries.items[0];
}

export default { fetchEntries };
