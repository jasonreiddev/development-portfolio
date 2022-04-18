/* eslint-disable*/
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { fetchEntries, fetchEntry } from 'projects/portfolio/contentfulPosts';
import { TextCard } from 'projects/component-library/stories/widgets/TextCard/TextCard';
import { PageTitle } from 'projects/component-library/stories/components/PageTitle/PageTitle';
import { PathBreadcrumb } from 'projects/component-library/stories/widgets/PathBreadcrumb/PathBreadcrumb';

export async function getStaticPaths() {
  const res = await fetchEntries();
  if (typeof res == 'undefined') {
    return;
  }
  const data = await res.map((p: any) => {
    return p.fields;
  });

  const paths: { params: { slug: String } }[] = [];
  data.map((blogPost: any) => paths.push({ params: { slug: blogPost.slug.toString() } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetchEntry(params.slug);
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

export default function Post({ postData }: any) {
  return (
    <>
      <PathBreadcrumb />
      <PageTitle
        text={postData.title}
        subTitle={`Posted ${new Date(postData.publishedDate).toLocaleDateString('en-GB', {
          month: 'long',
          year: 'numeric',
        })}`}
      />
      <TextCard>
        <>{documentToReactComponents(postData.body)}</>
      </TextCard>
    </>
  );
}
