import { IconButtonStyles as s } from './IconButton.styles';
import { ColorPair, renderIcon, Icon } from 'helpers/media';

export interface IconButtonProps {
  icon: Icon;
  flipIconY?: boolean;
  active?: boolean;
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  ariaLabel: string;
  onClick?: () => void;
  align?: 'left' | 'center' | 'bottom-right';
  colorPair?: ColorPair;
}

export const IconButton = ({
  icon,
  flipIconY,
  active = false,
  size = 'medium',
  label,
  ariaLabel,
  align = 'left',
  colorPair = ColorPair.Secondary,
  ...props
}: IconButtonProps): JSX.Element => {
  return (
    <s.Wrapper align={align}>
      <s.Button
        active={active}
        type="button"
        size={size}
        {...props}
        data-tooltip={label}
        data-tooltip--close={size == 'small' ? 'true' : null}
        aria-label={ariaLabel}
        colorPair={colorPair}
      >
        <s.Icon flipIconY={flipIconY}>{renderIcon(icon)}</s.Icon>
      </s.Button>
    </s.Wrapper>
  );
};
