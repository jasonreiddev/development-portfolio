import { ButtonGroupStyles as s } from './IconButtonGroup.styles';
import { IconButton, Icon } from '../../components/IconButton/IconButton';
import { TextCard } from '../../widgets/TextCard/TextCard';

export interface IconButtonGroupProps {
  backgroundColor?: string;
  iconButtonBackgroundColor?: string;
  iconButtonSize?: 'small' | 'medium' | 'large';
  fitContent?: boolean;
}

export const IconButtonGroup = ({
  backgroundColor,
  iconButtonSize = 'medium',
  iconButtonBackgroundColor,
  fitContent = true,
  ...props
}: IconButtonGroupProps): JSX.Element => {
  return (
    <TextCard fitContent={fitContent}>
      <s.ButtonWrapper backgroundColor={backgroundColor} {...props}>
        <IconButton
          icon={Icon.Mail}
          active={true}
          size={iconButtonSize}
          backgroundColor={iconButtonBackgroundColor}
          label="Mail"
          ariaLabel="Mail"
        />
        <IconButton
          icon={Icon.Refresh}
          size={iconButtonSize}
          backgroundColor={iconButtonBackgroundColor}
          label="Refresh"
          ariaLabel="Refresh"
        />
        <IconButton
          icon={Icon.Search}
          primary={true}
          size={iconButtonSize}
          backgroundColor={iconButtonBackgroundColor}
          label="Search"
          ariaLabel="Search"
        />
        <IconButton
          icon={Icon.LogOut}
          size={iconButtonSize}
          backgroundColor={iconButtonBackgroundColor}
          label="Log Out"
          ariaLabel="Log Out"
        />
      </s.ButtonWrapper>
    </TextCard>
  );
};
