import { CardProps } from 'projects/component-library/stories/components/Card/Card';
import { CardGrid } from 'projects/component-library/stories/components/CardGrid/CardGrid';
import { LayoutContext } from 'projects/helpers/layoutContext';
import { TempoEntry, fetchDefaultEntry } from 'projects/portfolio/contentfulTempo';
import { useContext } from 'react';

interface TempoProps {
  data: TempoEntry;
}

export async function getStaticProps(): Promise<{ props: TempoProps } | undefined> {
  const res = await fetchDefaultEntry();
  if (typeof res == 'undefined') {
    return;
  }
  const data = await res.fields;

  return {
    props: {
      data,
    },
  };
}

const Tempo = ({ data }: TempoProps): JSX.Element => {
  const { updatePageTitle, updatePageDescription } = useContext(LayoutContext);
  updatePageTitle?.('Tempo');
  updatePageDescription?.('Tempo string selector');

  const BlogPosts: CardProps[] = [];
  // data.sort(function (a: any, b: any) {
  //   a.sortDate = a.endDate == null ? new Date() : a.endDate;
  //   b.sortDate = b.endDate == null ? new Date() : b.endDate;
  //   return new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime();
  // });
  data.tempoString.map((tempoString: string) => BlogPosts.push({ title: tempoString }));

  return <CardGrid cards={BlogPosts} size={300} />;
};

export default Tempo;
