import { css } from 'styled-components';

type FlexType = {
  display?: 'flex';
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  flex?: string;
  flexWrap?: string;
};

export const flexTypeStyledHelper = css<FlexType>`
  display: ${(props) => (props.display ? `${props.display}` : null)};
  justify-content: ${(props) => (props.justifyContent ? `${props.justifyContent}` : null)};
  align-items: ${(props) => (props.alignItems ? `${props.alignItems}` : null)};
  flex-direction: ${(props) => (props.flexDirection ? `${props.flexDirection}` : null)};
  flex: ${(props) => (props.flex ? `${props.flex}` : null)};
  flex-wrap: ${(props) => (props.flexWrap ? `${props.flexWrap}` : null)};
`;

export const flexTypePropsHelper = (parentProps: any) => ({
  display: parentProps.display,
  justifyContent: parentProps.justifyContent,
  alignItems: parentProps.alignItems,
  flexDirection: parentProps.flexDirection,
  flex: parentProps.flex,
  flexWrap: parentProps.flexWrap,
});

export const flexTypeStorybookHelper = {
  display: {
    description: '',
  },
  justifyContent: {
    description: '',
  },
  alignItems: {
    description: '',
  },
  flexDirection: {
    description: '',
  },
  flex: {
    description: '',
  },
  flexWrap: {
    description: '',
  },
};

export default FlexType;
