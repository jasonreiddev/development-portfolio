import Image from 'next/image';

import { WallArtStyles } from './WallArt.styles';

interface WallArtProps {
  src?: string;
  alt?: string;
  caption?: string;
  width: number;
}

export const WallArt = ({ src, alt, caption, width }: WallArtProps): JSX.Element => {
  const aspectRatio = 3 / 2;
  const height = width * aspectRatio;
  return (
    <WallArtStyles>
      <Image src={`${src}`} alt={alt} width={width} height={height} />
      <p className="caption">{caption}</p>
    </WallArtStyles>
  );
};
