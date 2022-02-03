import { CustomKerningStyles } from './CustomKerning.styles';

export interface CustomKerningProps {
  kernGroups: KernGroup[];
}

interface KernGroup {
  letters: string;
  letterSpacing: string;
}

export const CustomKerning = ({ kernGroups }: CustomKerningProps): JSX.Element => {
  return (
    <CustomKerningStyles.Container>
      {kernGroups &&
        kernGroups.map((item, index) => {
          return (
            <CustomKerningStyles.KernGroup key={index} letterSpacing={item.letterSpacing}>
              {item.letters}
            </CustomKerningStyles.KernGroup>
          );
        })}
    </CustomKerningStyles.Container>
  );
};
