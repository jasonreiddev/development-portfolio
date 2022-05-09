import { Entry } from 'contentful';
import { CardProps } from 'projects/component-library/stories/components/Card/Card';
import { CardGrid } from 'projects/component-library/stories/components/CardGrid/CardGrid';
import { LayoutContext } from 'projects/helpers/layoutContext';
import { BlogPost, fetchEntries } from 'projects/portfolio/contentfulPosts';
import { useContext } from 'react';

interface BlogProps {
  data: BlogPost[];
}

export async function getStaticProps(): Promise<{ props: BlogProps }> {
  const res = await fetchEntries();
  const data = await res.map((p: Entry<BlogPost>) => {
    return p.fields;
  });

  return {
    props: {
      data,
    },
  };
}

const Blog = ({ data }: BlogProps): JSX.Element => {
  const { updatePageTitle, updatePageDescription } = useContext(LayoutContext);
  updatePageTitle?.('Blog');
  updatePageDescription?.('Blog posts');

  const BlogPosts: CardProps[] = [];
  data.map((blogPost: BlogPost) => BlogPosts.push(mapBlogPostToCard(blogPost)));

  return <CardGrid cards={BlogPosts} size={300} />;
};

export function mapBlogPostToCard(blogPost: BlogPost): CardProps {
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
