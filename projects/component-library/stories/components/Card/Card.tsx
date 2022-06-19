import Image from 'next/image';
import { useState, useContext } from 'react';
import Router from 'next/router';

import { CardStyles as s } from './Card.styles';
import { ClampText } from '../ClampText/ClampText';
import { LayoutContext } from '../../../../helpers/layoutContext';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { ColorPair, Icon } from '../../../../helpers/media';

export interface CardProps {
  url?: string;
  ctaText?: string;
  title: string;
  image?: string;
  alt?: string;
  text?: string;
  tags?: string[];
  modifyWidth?: 1 | 2 | 'full';
  onTagClick?: (text: string) => void;
  flipContent?: JSX.Element | string;
  fullText?: boolean;
  // Enabled by default, disable for added buttons, useful for carousels
  fullClickable?: boolean;
  colorPair?: ColorPair;
  colorPairButton?: ColorPair;
  colorPairBack?: ColorPair;
}

export const Card = ({
  url,
  ctaText = 'Read more',
  title,
  image,
  alt,
  text,
  tags,
  modifyWidth,
  onTagClick,
  flipContent,
  fullText,
  fullClickable = false,
  colorPair = ColorPair.Secondary,
  colorPairButton = ColorPair.Primary,
  colorPairBack = ColorPair.Tertiary,
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
  const [wasFlipped, setWasFlipped] = useState<boolean>(false);

  const { dark } = useContext(LayoutContext);

  const CtaButton = ({ flipIcon }: { flipIcon?: boolean }): JSX.Element => (
    <>
      {!url && flipContent && (
        <IconButton
          icon={Icon.Flip}
          flipIconY={flipIcon}
          size={'medium'}
          ariaLabel="Flip"
          align={'bottom-right'}
          colorPair={colorPairButton}
          onClick={() => {
            if (flipContent) {
              {
                setWasFlipped(flipped);
                setFlipped(!flipped);
              }
            }
          }}
        />
      )}
      {url && ctaText && (
        <Button
          label={ctaText}
          colorPair={colorPairButton}
          onClick={() => {
            if (url != undefined) {
              Router.push(url);
            }
          }}
        />
      )}
    </>
  );
  return (
    <s.Container
      role={url ? 'link' : undefined}
      modifyWidth={modifyWidth}
      dark={dark}
      tabIndex={0}
      onClick={() => {
        if (fullClickable) {
          if (url != undefined) {
            Router.push(url);
          }
          if (flipContent) {
            {
              setWasFlipped(flipped);
              setFlipped(!flipped);
            }
          }
        }
      }}
    >
      <s.ContainerInner flipped={flipped} wasFlipped={wasFlipped}>
        <s.Front
          flipped={flipped}
          canFlip={!!flipContent}
          dark={dark}
          link={!!url}
          colorPair={colorPair}
        >
          {image && <Image src={image} alt={alt} />}
          {!fullText && tags && (
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
          <s.Content fullText={fullText}>
            <s.TitleWrapper>
              {
                // todo, add helper function to check if links are external
                //{!!url && <MdLink />}
              }

              <h3>
                <ClampText lines={2} text={title} />
              </h3>
            </s.TitleWrapper>
            {text && <ClampText lines={3} text={text} />}
            {!fullClickable && <CtaButton />}
          </s.Content>
        </s.Front>
        {flipContent && (
          <s.Back flipped={flipped} canFlip={!!flipContent} dark={dark} colorPair={colorPairBack}>
            <s.BackContent>
              {flipContent}
              {!fullClickable && <CtaButton flipIcon={true} />}
            </s.BackContent>
          </s.Back>
        )}
      </s.ContainerInner>
    </s.Container>
  );
};
