import Image from 'next/image';

import { WallArtStyles as s } from './WallArt.styles';

export interface WallArtProps {
  src?: string;
  alt?: string;
  caption?: string;
  width: number;
}

export const WallArt = ({ src, alt, caption, width }: WallArtProps): JSX.Element => {
  const aspectRatio = 3 / 2;
  const height = width * aspectRatio;
  return (
    <s.Wrapper>
      <Image src={`${src}`} alt={alt} width={width} height={height} />
      {caption ? <p className="caption">{caption}</p> : null}
    </s.Wrapper>
  );
};
