import { InstantSearch } from 'component-library/stories/widgets/InstantSearch/InstantSearch';
import { LayoutContext } from 'helpers/layoutContext';
import { useContext } from 'react';

const Search = (): JSX.Element => {
  const { updatePageTitle, updatePageDescription } = useContext(LayoutContext);
  updatePageTitle?.('Search');
  updatePageDescription?.('Site Search');

  return <InstantSearch indexName={'portfolio'} title={'Search'} />;
};

export default Search;
