/* eslint-disable*/
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BlogPost, fetchEntries, fetchEntry } from 'projects/helpers/contentful/blogPost';
import { TextCard } from 'projects/component-library/stories/widgets/TextCard/TextCard';
import { PageTitle } from 'projects/component-library/stories/components/PageTitle/PageTitle';
import { PathBreadcrumb } from 'projects/component-library/stories/widgets/PathBreadcrumb/PathBreadcrumb';
import { Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { getGBDate } from 'projects/helpers/text';

interface BlogProps {
  postData: BlogPost;
}

interface BlogParams {
  params: {
    slug: string;
  };
}

export async function getStaticPaths() {
  const res = await fetchEntries();
  if (typeof res == 'undefined') {
    return;
  }
  const data = await res.map((p: Entry<BlogPost>) => {
    return p.fields;
  });

  const paths: BlogParams[] = [];
  data.map((blogPost: BlogPost) => paths.push({ params: { slug: blogPost.slug.toString() } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(
  params: BlogParams,
): Promise<{ props: BlogProps } | undefined> {
  const res = await fetchEntry(params.params.slug);
  if (typeof res == 'undefined') {
    return;
  }
  const postData = await res.fields;

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: BlogProps) {
  return (
    <>
      <PathBreadcrumb />
      <PageTitle text={postData.title} subTitle={`Posted ${getGBDate(postData.publishedDate)}`} />
      <TextCard fitContent={false}>
        <>{documentToReactComponents(postData.body as Document)}</>
      </TextCard>
    </>
  );
}
