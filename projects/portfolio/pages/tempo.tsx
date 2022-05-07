import { CheckboxList } from 'projects/component-library/stories/widgets/CheckboxList/CheckboxList';
import { TextCard } from 'projects/component-library/stories/widgets/TextCard/TextCard';
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

  return (
    <TextCard fitContent={false}>
      <CheckboxList items={data.tempoString.map((string) => ({ value: string, checked: false }))} />
    </TextCard>
  );
};

export default Tempo;
