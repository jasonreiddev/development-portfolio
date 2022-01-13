import { ButtonGroupStyles } from './IconButtonGroup.styles';
import { IconButton, Icon } from '../../components/IconButton/IconButton';

interface IconButtonGroupProps {
  backgroundColor?: string;
  iconButtonBackgroundColor?: string;
  iconButtonSize?: 'small' | 'medium' | 'large';
}

export const IconButtonGroup = ({
  backgroundColor,
  iconButtonSize = 'medium',
  iconButtonBackgroundColor,
  ...props
}: IconButtonGroupProps): JSX.Element => {
  return (
    <ButtonGroupStyles backgroundColor={backgroundColor} {...props}>
      <IconButton
        icon={Icon.Mail}
        active={true}
        size={iconButtonSize}
        backgroundColor={iconButtonBackgroundColor}
        label={'Mail'}
      />
      <IconButton
        icon={Icon.Refresh}
        size={iconButtonSize}
        backgroundColor={iconButtonBackgroundColor}
        label={'Refresh'}
      />
      <IconButton
        icon={Icon.Search}
        primary={true}
        size={iconButtonSize}
        backgroundColor={iconButtonBackgroundColor}
        label={'Search'}
      />
      <IconButton
        icon={Icon.LogOut}
        size={iconButtonSize}
        backgroundColor={iconButtonBackgroundColor}
        label={'Log Out'}
      />
    </ButtonGroupStyles>
  );
};
