import React, { useState, useEffect } from 'react';

import { TypingEffectStyles as s } from './TypingEffect.styles';

export interface TypingEffectProps {
  strings: string[];
}

export const TypingEffect = ({ strings = [] }: TypingEffectProps): JSX.Element => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === strings.length - 1 && subIndex === strings[index].length) {
      return;
    }

    if (subIndex === strings[index].length + 1 && index !== strings.length - 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === strings[index].length ? 1000 : 150, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span>
      {`${strings[index].substring(0, subIndex)}`}
      <s.Cursor>|</s.Cursor>
    </span>
  );
};
