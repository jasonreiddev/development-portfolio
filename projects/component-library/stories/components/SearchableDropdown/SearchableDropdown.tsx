import { useEffect, useRef, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

import { InputField } from '../InputField/InputField';
import { clickOutside } from 'helpers/clickOutside';
import { SearchableDropdownStyles as s } from './SearchableDropdown.styles';

export interface SearchableDropdownProps {
  searchFieldCallback(chosenOptions: string[]): void;
  showDropdownOnContainerClick?: boolean;
  values: Array<string>;
  title: string;
  name: string;
  placeholder: string;
}

export const SearchableDropdown = ({
  searchFieldCallback,
  showDropdownOnContainerClick = false,
  values,
  title,
  name,
  placeholder,
}: SearchableDropdownProps): JSX.Element => {
  const [data, setData] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [resultCount, setResultCount] = useState(data.length);
  const [chosenOptions, setChosenOptions] = useState<string[]>([]);
  const [results, setResults] = useState<string[]>([]);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = clickOutside(dropdownRef, false);

  const isMatch = (clientName: string): boolean => clientName.toLowerCase().startsWith(search);

  useEffect(() => {
    setResultCount(data.filter((d) => isMatch(d)).length);
    setResults(data.filter((d) => isMatch(d)));
  }, [search]);

  useEffect(() => {
    searchFieldCallback(chosenOptions);
  }, [chosenOptions]);

  useEffect(() => {
    setData(values);
    setResultCount(values.length);
    setResults(values);
  }, [values]);

  return (
    <s.Container onClick={() => showDropdownOnContainerClick && setIsActive(!isActive)}>
      <InputField
        title={title}
        name={name}
        placeholder={placeholder}
        callback={(value) => setSearch(value.toLowerCase())}
        onClick={() => {
          !showDropdownOnContainerClick && setIsActive(!isActive);
        }}
      />
      <s.ListAndResults
        visible={isActive}
        ref={dropdownRef}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <s.ListWrapper>
          <s.List>
            {data.map((d, i) => (
              <s.Option
                onClick={() => {
                  if (results.includes(d)) {
                    if (chosenOptions.includes(d))
                      setChosenOptions(chosenOptions.filter((x) => x !== d));
                    else setChosenOptions([...chosenOptions, d]);
                  }
                }}
                className={`${isMatch(d) ? '' : 'option-hidden'} ${
                  chosenOptions.includes(d) ? 'option-chosen' : ''
                }`}
                key={i}
              >
                <AiOutlineCheck className={`${chosenOptions.includes(d) ? 'option-chosen' : ''}`} />{' '}
                <span>{d}</span>
              </s.Option>
            ))}
          </s.List>
        </s.ListWrapper>
        {resultCount === 0 ? (
          <s.NoResults>No Results....</s.NoResults>
        ) : (
          <s.Results>
            {resultCount} Result{resultCount > 1 ? 's' : ''} -{' '}
            <span
              className={`reset-selection ${chosenOptions.length > 0 ? '' : 'disabled'}`}
              onClick={() => setChosenOptions([])}
            >
              Clear selection?
            </span>
          </s.Results>
        )}
      </s.ListAndResults>
    </s.Container>
  );
};
