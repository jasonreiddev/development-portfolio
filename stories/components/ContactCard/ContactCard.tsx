import Image from 'next/image';

import { ContactCardStyles as s } from './ContactCard.styles';

export interface ContactCardProps {
  avatarSrc: string;
  name: string;
  email: string;
}

export const ContactCard = ({ avatarSrc, name, email }: ContactCardProps): JSX.Element => {
  return (
    <s.Card>
      {avatarSrc && <Image alt="" src={avatarSrc} className="avatar" />}
      <h2>{name}</h2>
      <p>{email}</p>
    </s.Card>
  );
};
