import { Entry } from 'contentful';
import { CardProps } from 'component-library/stories/components/Card/Card';
import { CardGrid } from 'component-library/stories/components/CardGrid/CardGrid';
import { BlogPost, fetchEntries } from 'helpers/contentful/blogPost';
import { LayoutContext } from 'helpers/layoutContext';
import { mapBlogPostToCard } from 'helpers/mapToCard';
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

  return <CardGrid cards={BlogPosts} size={280} />;
};

export default Blog;
