import MarginType, { MarginTypeStyledHelper } from 'styles/style/types/margin.type';
import PaddingType, { PaddingTypeStyledHelper } from 'styles/style/types/padding.type';
import styled from 'styled-components';

const StyledHeading = styled.div<{
  color?: string;
  customColor?: string;
  size?: number;
  underline?: boolean;
  weight?: string;
  block?: boolean;
  align?: string;
  marginBottom?: string;
  marginTop?: string;
  cursor?: string;
} & PaddingType & MarginType>`
  color: ${(props) => (props.customColor ? `${props.customColor}` : props.theme.colors[props.color ?? '']?.background)};
  font-size: ${(props) => (props.size ? `${props.size}px` : '12px')};
  font-weight: ${(props) => (props.weight ? props.weight : '')};
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  text-decoration: ${(props) => (props.underline ? 'underline' : '')};
  font-family: 'Montserrat', sans-serif;
  text-align: ${(props) => (props.align ? props.align : null)};
  cursor: ${(props) => (props.cursor ? props.cursor : 'default')};
  ${MarginTypeStyledHelper}
  ${PaddingTypeStyledHelper}
`;

export { StyledHeading };
