import Image from 'next/image';

import { CardStyles as s } from './Card.styles';
import { ClampText } from '../ClampText/ClampText';
import { useState } from 'react';

export interface CardProps {
  url?: string;
  title: string;
  image?: string;
  alt?: string;
  text?: string;
  tags?: string[];
  modifyWidth?: 1 | 2 | 'full';
  onTagClick?: (text: string) => void;
  flipContent?: JSX.Element;
}

export const Card = ({
  url,
  title,
  image,
  alt,
  text,
  tags,
  modifyWidth,
  onTagClick,
  flipContent,
}: CardProps): JSX.Element => {
  if (tags != undefined) {
    tags.sort(function (a, b) {
      // by asc length, asc alphabetically
      if (a.length !== b.length) {
        return a.length - b.length;
      }
      return a < b ? -1 : 1;
    });
  }

  const [flipped, setFlipped] = useState<boolean>(false);
  if (flipContent) {
    url = undefined;
  }

  return (
    <s.Container
      href={url}
      modifyWidth={modifyWidth}
      onClick={() => {
        if (flipContent) {
          {
            setFlipped(!flipped);
          }
        }
      }}
    >
      <s.ContainerInner flipped={flipped}>
        <s.Front flipped={flipped} canFlip={!!flipContent}>
          {image && <Image src={image} alt={alt} />}
          {tags && (
            <s.TagsContainer>
              {tags.map((tag, index) => (
                <s.Tag
                  key={`${title}-tag${index}`}
                  onClick={(event) => {
                    if (onTagClick != undefined) {
                      event.stopPropagation();
                      event.preventDefault();
                      onTagClick(tag);
                      return false;
                    }
                  }}
                >
                  {tag.length > 14 ? tag.substring(0, 12) + '...' : tag}
                </s.Tag>
              ))}
            </s.TagsContainer>
          )}
          <s.Content>
            <h3>
              <ClampText lines={2} text={title} />
            </h3>
            {text && <ClampText lines={3} text={text} />}
          </s.Content>
        </s.Front>
        {flipContent && (
          <s.Back flipped={flipped} canFlip={!!flipContent}>
            <s.BackContent>{flipContent}</s.BackContent>
          </s.Back>
        )}
      </s.ContainerInner>
    </s.Container>
  );
};
