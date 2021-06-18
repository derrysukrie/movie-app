import React, { ReactNode } from 'react';
import MarginType, { marginTypePropsHelper, MarginTypeStyledHelper } from 'styles/style/types/margin.type';
import PaddingType, { paddingTypePropsHelper, PaddingTypeStyledHelper } from 'styles/style/types/padding.type';
import styled from 'styled-components';

const FlexStyled = styled.div<{
  justify?: string;
  align?: string;
  direction?: string;
  flex?: string;
  flexWrap?: string;
  block?: boolean;
} & PaddingType & MarginType>`
  display: flex;
  justify-content: ${(props) => (props.justify ? `${props.justify}` : null)};
  align-items: ${(props) => (props.align ? `${props.align}` : null)};
  flex-direction: ${(props) => (props.direction ? `${props.direction}` : null)};
  flex: ${(props) => (props.flex ? `${props.flex}` : null)};
  flex-wrap: ${(props) => (props.flexWrap ? `${props.flexWrap}` : null)};
  width: ${(props) => (props.block ? '100%' : null)};
  ${PaddingTypeStyledHelper}
  ${MarginTypeStyledHelper}
`;

export type FlexProps = {
  children?: ReactNode;
  justify?: 'space-between' | 'space-around' | 'center' | 'flex-start' | 'flex-end';
  align?: 'center' | 'stretch' | 'start';
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flex?: string;
  block?: boolean;
  onClick?: ()=>void;
} & PaddingType & MarginType;

const Flex = (props: FlexProps) => (
  <FlexStyled
    onClick={props.onClick}
    justify={props.justify}
    align={props.align}
    direction={props.direction}
    flex={props.flex}
    flexWrap={props.flexWrap}
    block={props.block}
    {...paddingTypePropsHelper(props)}
    {...marginTypePropsHelper(props)}
  >
    {props.children}
  </FlexStyled>
);

export default Flex;
