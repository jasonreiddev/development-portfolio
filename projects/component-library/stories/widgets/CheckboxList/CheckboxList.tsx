import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { Checkbox } from '../../components/Checkbox/Checkbox';

export interface Item {
  value: string;
  checked: boolean;
}

export interface CheckboxListProps {
  items?: Item[];
}

export const CheckboxList = ({ items = [] }: CheckboxListProps): JSX.Element => {
  const [stateItems, setStateItems] = useState(items);

  const updateStateItems = (value: string): void => {
    const updatedData = stateItems.map((string) => {
      if (string.value == value) {
        return { value: string.value, checked: !string.checked } as Item;
      } else {
        return string;
      }
    });
    setStateItems(updatedData);
  };

  return (
    <>
      <ul>
        {stateItems?.map((item, index) => (
          <li key={`checkbox${index}`}>
            <Checkbox
              label={item.value}
              checked={item.checked}
              handleChange={() => updateStateItems(item.value)}
            />
          </li>
        ))}
      </ul>
      <Button label="Copy To Clipboard" onClick={() => copyToClipboard(stateItems)} />
    </>
  );
};

function copyToClipboard(allItems: Item[]): void {
  const textarea = document.createElement('textarea');
  textarea.textContent = '';

  allItems.forEach((item) => {
    if (item.checked == true) {
      textarea.textContent += item.value + '. ';
    }
  });

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}
