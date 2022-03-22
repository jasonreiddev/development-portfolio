import { Device } from '../../../../helpers/media';
import { IfWidthStyles as s } from './IfWidth.styles';

export interface IfWidthProps {
  children?: JSX.Element | string;
  falseChildren?: JSX.Element | string;
  minWidth?: Device;
  maxWidth?: Device;
}

export const IfWidth = ({
  children,
  falseChildren,
  minWidth,
  maxWidth,
}: IfWidthProps): JSX.Element => {
  return (
    <>
      <s.IfWidthTrue minWidth={minWidth} maxWidth={maxWidth}>
        {children}
      </s.IfWidthTrue>
      <s.IfWidthFalse minWidth={minWidth} maxWidth={maxWidth}>
        {falseChildren}
      </s.IfWidthFalse>
    </>
  );
};
