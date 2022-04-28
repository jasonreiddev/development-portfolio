import { Asset, createClient, Entry, EntryFields } from 'contentful';

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

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: `${space}`,
  accessToken: `${accessToken}`,
});

export async function fetchEntries(limit?: number): Promise<Entry<BlogPost>[]> {
  const entries = await client.getEntries<BlogPost>({
    limit: limit,
    content_type: 'blogPost',
  });
  if (entries.items) return entries.items;
  return [];
}

export async function fetchEntry(slug: string): Promise<Entry<BlogPost> | undefined> {
  console.log(slug);
  const entries = await client.getEntries<BlogPost>({
    content_type: 'blogPost',
    'fields.slug[in]': slug,
  });
  if (entries.items) return entries.items[0];
}

export default { fetchEntries };
