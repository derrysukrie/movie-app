import { css } from 'styled-components';

type MarginType = {
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
};

export const MarginTypeStyledHelper = css`
    margin-top: ${(props: MarginType) => props.marginTop || null};
    margin-bottom: ${(props: MarginType) => props.marginBottom || null};
    margin-right: ${(props: MarginType) => props.marginRight || null};
    margin-left: ${(props: MarginType) => props.marginLeft || null};
    margin: ${(props: MarginType) => props.margin};
`;

export const marginTypePropsHelper = (parentProps: any) => ({
  margin: parentProps.margin,
  marginTop: parentProps.marginTop,
  marginBottom: parentProps.marginBottom,
  marginRight: parentProps.marginRight,
  marginLeft: parentProps.marginLeft,
});

export const marginTypeStorybookHelper = {
  margin: {
    description: 'Margin',
  },
  marginTop: {
    description: 'Margin Top',
  },
  marginBottom: {
    description: 'Margin Bottom',
  },
  marginRight: {
    description: 'Margin Right',
  },
  marginLeft: {
    description: 'Margin Left',
  },
};

export default MarginType;
