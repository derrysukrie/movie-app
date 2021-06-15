/* eslint-disable react/require-default-props */
import React from 'react';
import MarginType, { marginTypePropsHelper } from 'shared/styles/types/margin.type';
import PaddingType, { paddingTypePropsHelper } from 'shared/styles/types/padding.type';
import theme, { ColorTypes } from 'shared/theme';
import { ThemeProvider } from 'styled-components';
import { StyledHeading } from './heading.styled';

type Props = {
  children: React.ReactNode;
  color?: ColorTypes;
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
  <ThemeProvider theme={theme}>
    <StyledHeading
      size={props.size}
      color={props.color}
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
  </ThemeProvider>
);

export default Heading;
