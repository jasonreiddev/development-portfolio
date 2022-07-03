import { HoverColorStyles as s } from './HoverColor.styles';
import { ColorPair, renderIcon, Icon } from 'helpers/media';

export interface HoverColorProps {
  text?: string;
  icon?: Icon;
  iconAlt?: string;
  date?: string;
  colorPair?: ColorPair;
}

export const HoverColor = ({
  text,
  icon,
  date,
  colorPair = ColorPair.Secondary,
}: HoverColorProps): JSX.Element => {
  return (
    <s.Wrapper colorPair={colorPair}>
      {icon && <>{renderIcon(icon)}&nbsp;</>}
      <s.Highlight>{text}</s.Highlight>
      {date && <span>&nbsp;- {date}</span>}
    </s.Wrapper>
  );
};
