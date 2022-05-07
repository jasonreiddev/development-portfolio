import { useState, useEffect, RefObject, Dispatch, SetStateAction } from 'react';

export const clickOutside = (
  element: RefObject<HTMLElement>,
  initialSetState: boolean,
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isActive, setIsActive] = useState(initialSetState);

  useEffect(() => {
    const onClick = (event: Event): void => {
      // If the element exists and is clicked outside of
      if (element.current !== null && !element.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    // If the item is active then listen for clicks
    if (isActive) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive, element]);

  return [isActive, setIsActive];
};
