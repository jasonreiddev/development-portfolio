/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardProps } from 'projects/component-library/stories/components/Card/Card';
import { CardGrid } from 'projects/component-library/stories/components/CardGrid/CardGrid';
import { LayoutContext } from 'projects/helpers/layoutContext';
import { fetchEntries } from 'projects/portfolio/contentfulPosts';
import { useContext } from 'react';

type BlogProps = { data: any };

export async function getStaticProps(): Promise<any> {
  const res = await fetchEntries();
  if (typeof res == 'undefined') {
    return;
  }
  const data = await res.map((p: any) => {
    return p.fields;
  });

  return {
    props: {
      data,
    },
  };
}

const Blog = ({ data }: BlogProps): JSX.Element => {
  const { updatePageTitle } = useContext(LayoutContext);
  updatePageTitle && updatePageTitle('Blog');

  const BlogPosts: CardProps[] = [];
  data.sort(function (a: any, b: any) {
    // by desc endDate // TODO add start date
    a.sortDate = a.endDate == null ? new Date() : a.endDate;
    b.sortDate = b.endDate == null ? new Date() : b.endDate;
    return new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime();
  });
  // TODO Calculate Length
  data.map((blogPost: any) => BlogPosts.push(mapBlogPostToCard(blogPost)));

  return <CardGrid cards={BlogPosts} size={300} />;
};

export function mapBlogPostToCard(blogPost: any): CardProps {
  blogPost.endDate = new Date(blogPost.publishedDate).toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
  });
  return {
    title: blogPost.title,
    url: `blog/${blogPost.slug}`,
    text: `${blogPost.endDate}\n${blogPost.excerpt}`,
  };
}

export default Blog;
