/* eslint-disable react/require-default-props */
import React from 'react';
import { StyledButton } from './button.styled';

type Props = {
  children?: React.ReactNode;
  background?: string;
  color?: string;
  weight?: '500' | '600' | '700' | '800';
  radius?: number;
  border?: string;
  margin?: string;
  padding?: string;
  onClick?: () => any;
  className?: string;
};

const Button = (props: Props) => (
  <StyledButton
    background={props.background}
    color={props.color}
    weight={props.weight}
    radius={props.radius}
    border={props.border}
    margin={props.margin}
    padding={props.padding}
    onClick={props.onClick}
    className={props.className}
  >
    {props.children}
  </StyledButton>
);

export default Button;
