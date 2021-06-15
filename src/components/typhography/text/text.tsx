/* eslint-disable react/require-default-props */
import React from 'react';
import theme, { ColorTypes } from 'shared/theme';
import { ThemeProvider } from 'styled-components';
import { StyledText } from './text.styled';

type Props = {
  children: React.ReactNode;
  color?: ColorTypes;
  customColor?: string;
  size?: number;
  decoration?: 'underline' | 'line-through' | 'overline';
  weight?: '500' | '600' | '700' | '800';
  block?: boolean;
  align?: 'left' | 'center' | 'right';
  marginBottom?: string;
  margintop?: string;
  marginLeft?: string;
  cursor?: string;
  fontStyle? :'italic';
  onClick?:()=>any;
  className?:string;
};

const Text = (props: Props) => (
  <ThemeProvider theme={theme}>
    <StyledText
      size={props.size}
      color={props.color}
      customColor={props.customColor}
      decoration={props.decoration}
      weight={props.weight}
      block={props.block}
      align={props.align}
      marginBottom={props.marginBottom}
      marginTop={props.margintop}
      marginLeft={props.marginLeft}
      fontStyle={props.fontStyle}
      cursor={props.cursor}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </StyledText>
  </ThemeProvider>
);

Text.defaultProps = {
  color: 'black',
};

export default Text;
