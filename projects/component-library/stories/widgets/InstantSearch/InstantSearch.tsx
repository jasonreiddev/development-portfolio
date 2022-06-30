import React from 'react';
import queryString from 'query-string';
import { useRouter } from 'next/router';

import {
  Hits,
  InstantSearch as InstantSearchElement,
  InstantSearchProps,
  SearchBox,
} from 'react-instantsearch-dom';
import { BasicDoc, Hit } from 'react-instantsearch-core';
import type { SearchState } from 'react-instantsearch-core';

import { InstantSearchStyles as s } from './InstantSearch.styles';
import createAlgoliaClient from '../../../../helpers/algolia/client';
import { renderIcon, Icon } from '../../../../helpers/media';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import { mapAlgoliaToCard } from 'projects/helpers/mapToCard';
import { Card } from '../../components/Card/Card';

const algoliaClient = createAlgoliaClient(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID ?? '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY ?? '',
);

export type InstantSearchProps = Pick<
  InstantSearchProps,
  'resultsState' | 'searchState' | 'widgetsCollector'
> & {
  indexName: string;
  title: string;
};

export const InstantSearch = ({
  indexName = 'portfolio',
  title,
  resultsState,
  widgetsCollector,
}: InstantSearchProps): JSX.Element => {
  const refContainer = React.useRef<HTMLDivElement>(null);

  const router = useRouter();

  const [searchState, setSearchState] = React.useState({
    page: 1,
    query: '',
  });

  // Convert Algolia search state to a query string object.
  const getQueryString = (state: SearchState): { pageIndex: number; searchTerm: string } => {
    return {
      pageIndex: state.page ? state.page : 1,
      searchTerm: `${state.query}`,
    };
  };

  // Handle Algolia search state change event.
  const onSearchStateChange = (state: SearchState): void => {
    console.log(state);
    router.push(
      {
        query: {
          ...router.query,
          pageIndex: state.page,
          searchTerm: state.query,
        },
      },
      undefined,
      {
        shallow: true,
      },
    );

    setSearchState(state);
    refContainer.current;
  };

  const createURL = (state: SearchState): string => {
    const url = `?${queryString.stringify(getQueryString(state))}`;
    return url;
  };

  return (
    <InstantSearchElement
      createURL={createURL}
      indexName={indexName}
      resultsState={resultsState}
      searchClient={algoliaClient}
      searchState={searchState ? searchState : null}
      onSearchStateChange={onSearchStateChange}
      widgetsCollector={widgetsCollector}
    >
      <s.Title>{title}</s.Title>
      <s.SearchWrapper>
        <SearchBox submit={renderIcon(Icon.Search)} searchAsYouType={false} />
      </s.SearchWrapper>
      <CardGrid size={280}>
        <Hits hitComponent={HitComponent} />
      </CardGrid>
    </InstantSearchElement>
  );
};

interface HitComponentProps {
  hit: Hit<BasicDoc>;
}

const HitComponent = ({ hit }: HitComponentProps): JSX.Element => {
  return <Card {...mapAlgoliaToCard(hit)} />;
};
