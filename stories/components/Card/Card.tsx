import { FunctionComponent } from 'react';
import Image from 'next/image';

import { CardStyles as s } from './Card.styles';
import { ClampText } from '../ClampText/ClampText';

export interface CardProps {
  url: string;
  title: string;
  image?: string;
  alt?: string;
  text?: string;
  tags?: string[];
}

export const Card: FunctionComponent<CardProps> = ({ url, title, image, alt, text, tags }) => {
  if (tags != undefined) {
    tags.sort(function (a, b) {
      return a.length - b.length;
    });
  }

  return (
    <s.Container href={url}>
      {image && <Image src={image} alt={alt} />}
      {tags && (
        <s.TagsContainer>
          {tags.map((tag, index) => (
            <s.Tag key={`${title}-tag${index}`}>{tag}</s.Tag>
          ))}
        </s.TagsContainer>
      )}
      <s.Content>
        <h2>
          <a href="#">
            <ClampText lines={2} text={title} />
          </a>
        </h2>
        {text && <ClampText lines={3} text={text} />}
      </s.Content>
    </s.Container>
  );
};

export default Card;
