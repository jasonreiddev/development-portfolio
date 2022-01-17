import { useState, useEffect } from 'react';

export const clickOutside = (
  element: React.MutableRefObject<null>,
  initialSetState: boolean,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [isActive, setIsActive] = useState(initialSetState);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const current: any = element.current;
    const onClick = (event: Event): void => {
      // If the element exists and is clicked outside of
      if (current !== null && !current.contains(event.target)) {
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
