/* eslint-disable react/require-default-props */
import React from 'react';
import { StyledText } from './text.styled';

type Props = {
  children: React.ReactNode;
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
  fontStyle?: 'italic';
  onClick?: () => any;
  className?: string;
  link?: boolean;
};

const Text = (props: Props) => (
  <StyledText
    size={props.size}
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
    link={props.link}
  >
    {props.children}
  </StyledText>
);

export default Text;
