import { ContactCardStyles as s } from './contactCard.styles';
import { ContactCard, ContactCardProps } from '../../components/ContactCard/ContactCard';

export interface PageContactCardProps extends ContactCardProps {
  backgroundColor: string;
}

export const PageContactCard = ({
  avatarSrc,
  name,
  email,
  backgroundColor,
}: PageContactCardProps): JSX.Element => (
  <s.Wrapper backgroundColor={backgroundColor}>
    <ContactCard avatarSrc={avatarSrc} name={name} email={email} />
  </s.Wrapper>
);
