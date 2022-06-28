import styled from 'styled-components';
import DeskImage from '../../../../portfolio/public/images/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg';
import { SuperHeaderStyles } from '../../components/SuperHeader/SuperHeader.styles';
import { HeaderStyles } from '../../widgets/Header/Header.styles';
import { ColorPair, useBase, useContrast, clamp } from '../../../../helpers/media';
import { RisingTextStyles } from '../../components/RisingText/RisingText.styles';

interface FPHeaderStylesProps {
  colorPair?: ColorPair;
  scrollOffset?: number;
  fullHeight?: boolean;
}

const TypingWrapper = styled.div`
  position: absolute;
  top: 50vh;
  padding: var(--spacing);
  text-shadow: -1px -1px 0 ${useBase(ColorPair.Default)}, 1px -1px 0 ${useBase(ColorPair.Default)},
    -1px 1px 0 ${useBase(ColorPair.Default)}, 1px 1px 0 ${useBase(ColorPair.Default)};
  font-size: ${clamp({ multiplier: 2 })};
`;

const Wrapper = styled.div<FPHeaderStylesProps>`
  height: ${(p: FPHeaderStylesProps) => (p.fullHeight ? `100vh` : `145px`)};

  ${SuperHeaderStyles.SuperHeader} {
    width: fit-content;
    position: fixed;
    width: 100%;
  }

  ${HeaderStyles.Wrapper} {
    position: fixed;
    width: 100%;
    margin-top: var(--spacing-fixed);

    ${(p: FPHeaderStylesProps) =>
      p.scrollOffset && p.scrollOffset > 0
        ? `
      background-color: ${useBase(ColorPair.Default)};
      margin-top: 0;
      transition: all .25s;
      `
        : `${RisingTextStyles.Text} {
        text-shadow: -1px -1px 0 ${useBase(ColorPair.Default)},
        1px -1px 0 ${useBase(ColorPair.Default)},
        -1px 1px 0 ${useBase(ColorPair.Default)},
        1px 1px 0 ${useBase(ColorPair.Default)};
      }

      ${HeaderStyles.MenuActive}, ${RisingTextStyles.RisingText} {
      text-shadow: -1px -1px 0 ${useContrast(ColorPair.Default)},
      1px -1px 0 ${useContrast(ColorPair.Default)},
      -1px 1px 0 ${useContrast(ColorPair.Default)},
      1px 1px 0 ${useContrast(ColorPair.Default)}
      }

      ${HeaderStyles.MenuActive} {
        color: ${useBase(ColorPair.Primary)}
      }
      
      ${HeaderStyles.IconWrapper}{
        border: 2px solid white;
      }
      `}
  }
`;

const HeaderWrapper = styled.div`
  height: 100%;
  background-image: url(${`${DeskImage}`});
  background-image: url('/images/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg');
  background-size: cover;
`;

const ScrollButtonWrapper = styled.div`
  position: fixed;
  right: calc(var(--spacing) / 2);
  bottom: calc(var(--spacing) / 2);
  z-index: 1;
`;

export const FPHeaderStyles = {
  Wrapper,
  HeaderWrapper,
  TypingWrapper,
  ScrollButtonWrapper,
};
