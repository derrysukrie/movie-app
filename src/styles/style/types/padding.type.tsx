import { css } from 'styled-components';

type PaddingType = {
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
};

export const PaddingTypeStyledHelper = css`
    padding-top: ${(props: PaddingType) => props.paddingTop || null};
    padding-bottom: ${(props: PaddingType) => props.paddingBottom || null};
    padding-right: ${(props: PaddingType) => props.paddingRight || null};
    padding-left: ${(props: PaddingType) => props.paddingLeft || null};
    padding: ${(props: PaddingType) => props.padding};
`;

export const paddingTypePropsHelper = (parentProps: any) => ({
  padding: parentProps.padding,
  paddingTop: parentProps.paddingTop,
  paddingBottom: parentProps.paddingBottom,
  paddingRight: parentProps.paddingRight,
  paddingLeft: parentProps.paddingLeft,
});

export const paddingTypeStorybookHelper = {
  padding: {
    description: 'Padding',
  },
  paddingTop: {
    description: 'Padding Top',
  },
  paddingBottom: {
    description: 'Padding Bottom',
  },
  paddingRight: {
    description: 'Padding Right',
  },
  paddingLeft: {
    description: 'Padding Left',
  },
};

export default PaddingType;
