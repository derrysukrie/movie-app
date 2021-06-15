import { ColorTypes } from 'shared/theme';
import styled from 'styled-components';

const StyledText = styled.div<{
  color?: ColorTypes;
  customColor?: string;
  size?: number;
  decoration?: string;
  weight?: string;
  block?: boolean;
  align?: string;
  marginBottom?: string;
  marginTop?: string;
  marginLeft?: string;
  cursor?: string;
  fontStyle? :string;
}>`
  color: ${(props) => (props.customColor ? `${props.customColor}` : props.theme.colors[props.color ?? '']?.background)};
  font-size: ${(props) => (props.size ? `${props.size}px` : '12px')};
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  text-decoration: ${(props) => (props.decoration ? props.decoration : null)};
  font-family: 'Nunito', sans-serif;
  text-align: ${(props) => (props.align ? props.align : null)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : null)};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : null)};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 'unset;')};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : null)};
  cursor: ${(props) => (props.cursor && props.cursor)};
`;

export { StyledText };
