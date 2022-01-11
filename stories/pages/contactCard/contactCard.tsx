import { ContactCardPageStyles } from './contactCard.styles';
import { ContactCard, ContactCardProps } from '../../components/ContactCard/ContactCard';

interface PageContactCardProps extends ContactCardProps {
  backgroundColor: string;
}

export const PageContactCard = ({
  avatarSrc,
  name,
  email,
  backgroundColor,
}: PageContactCardProps): JSX.Element => (
  <ContactCardPageStyles style={{ backgroundColor }}>
    <ContactCard avatarSrc={avatarSrc} name={name} email={email} />
  </ContactCardPageStyles>
);
