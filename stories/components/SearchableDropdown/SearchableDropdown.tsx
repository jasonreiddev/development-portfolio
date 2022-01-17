import { FunctionComponent, useEffect, useRef, useState } from 'react';
import InputField from '../InputField/InputField';
import { SearchableDropdownStyles } from './SearchableDropdown.styles';
import { AiOutlineCheck } from 'react-icons/ai';
import { clickOutside } from '../../../helpers/clickOutside';

export type SearchableDropdownProps = {
  searchFieldCallback(chosenOptions: string[]): void;
  showDropdownOnContainerClick?: boolean;
  values: Array<string>;
  title: string;
  name: string;
  placeholder: string;
};

const SearchableDropdown: FunctionComponent<SearchableDropdownProps> = ({
  searchFieldCallback,
  showDropdownOnContainerClick = false,
  values,
  title,
  name,
  placeholder,
}) => {
  // eslint-disable-next-line
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
    <SearchableDropdownStyles.Container
      onClick={() => showDropdownOnContainerClick && setIsActive(!isActive)}
    >
      <InputField
        title={title}
        name={name}
        placeholder={placeholder}
        callback={(value) => setSearch(value.toLowerCase())}
        onClick={() => {
          !showDropdownOnContainerClick && setIsActive(!isActive);
        }}
      />
      <SearchableDropdownStyles.ListAndResults
        visible={isActive}
        ref={dropdownRef}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <SearchableDropdownStyles.ListWrapper>
          <SearchableDropdownStyles.List>
            {data.map((d, i) => (
              <SearchableDropdownStyles.Option
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
              </SearchableDropdownStyles.Option>
            ))}
          </SearchableDropdownStyles.List>
        </SearchableDropdownStyles.ListWrapper>
        {resultCount === 0 ? (
          <SearchableDropdownStyles.NoResults>No Results....</SearchableDropdownStyles.NoResults>
        ) : (
          <SearchableDropdownStyles.Results>
            {resultCount} Result{resultCount > 1 ? 's' : ''} -{' '}
            <span
              className={`reset-selection ${chosenOptions.length > 0 ? '' : 'disabled'}`}
              onClick={() => setChosenOptions([])}
            >
              Clear selection?
            </span>
          </SearchableDropdownStyles.Results>
        )}
      </SearchableDropdownStyles.ListAndResults>
    </SearchableDropdownStyles.Container>
  );
};

export default SearchableDropdown;
