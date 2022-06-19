import Image from 'next/image';

import { ContactCardStyles as s } from './ContactCard.styles';
import { ColorPair } from '../../../../helpers/media';

export interface ContactCardProps {
  avatarSrc: string;
  name: string;
  email: string;
  colorPair?: ColorPair;
}

export const ContactCard = ({
  avatarSrc,
  name,
  email,
  colorPair = ColorPair.Secondary,
}: ContactCardProps): JSX.Element => {
  return (
    <s.Card colorPair={colorPair}>
      {avatarSrc && <Image alt="" src={avatarSrc} className="avatar" />}
      <h2>{name}</h2>
      <p>{email}</p>
    </s.Card>
  );
};
