import Image from 'next/image';
import { TextCard } from '../../widgets/TextCard/TextCard';

import { WallArtStyles as s } from './WallArt.styles';
import { ColorPair } from 'helpers/media';

export interface WallArtProps {
  src?: string;
  alt?: string;
  caption?: string;
  width: number;
  colorPair?: ColorPair;
}

export const WallArt = ({
  src,
  alt,
  caption,
  width,
  colorPair = ColorPair.Secondary,
}: WallArtProps): JSX.Element => {
  const aspectRatio = 3 / 2;
  const height = width * aspectRatio;
  return (
    <s.Wrapper>
      <s.ImageWrapper>
        {src && <Image src={`${src}`} alt={alt} width={width} height={height} />}
      </s.ImageWrapper>
      {caption && <TextCard colorPair={colorPair}>{caption}</TextCard>}
    </s.Wrapper>
  );
};
