/* eslint-disable react/require-default-props */
import React from 'react';
import MarginType, { marginTypePropsHelper } from 'styles/style/types/margin.type';
import PaddingType, { paddingTypePropsHelper } from 'styles/style/types/padding.type';
import { StyledHeading } from './heading.styled';

type Props = {
  children: React.ReactNode;
  customColor?: string;
  size?: number;
  underline?: boolean;
  weight?: '500' | '600' | '700';
  align?: 'left' | 'center' | 'right';
  block?: boolean;
  marginBottom?: string;
  marginTop?: string;
} & PaddingType & MarginType;

const Heading = (props: Props) => (
  <StyledHeading
    size={props.size}
    customColor={props.customColor}
    underline={props.underline}
    weight={props.weight}
    block={props.block}
    align={props.align}
    {...paddingTypePropsHelper(props)}
    {...marginTypePropsHelper(props)}
  >
    {props.children}
  </StyledHeading>
);

export default Heading;
