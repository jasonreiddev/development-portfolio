import { CustomKerningStyles as s } from './CustomKerning.styles';

export interface CustomKerningProps {
  kernGroups: KernGroup[];
}

interface KernGroup {
  letters: string;
  letterSpacing: string;
}

export const CustomKerning = ({ kernGroups }: CustomKerningProps): JSX.Element => {
  return (
    <s.Container>
      {kernGroups &&
        kernGroups.map((item, index) => {
          return (
            <s.KernGroup key={index} letterSpacing={item.letterSpacing}>
              {item.letters}
            </s.KernGroup>
          );
        })}
    </s.Container>
  );
};
