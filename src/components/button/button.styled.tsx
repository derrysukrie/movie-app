import styled from 'styled-components';

const StyledButton = styled.div<{
  background?: string;
  color?: string;
  radius?: string;
  border?: string;
  padding?: string;
  margin?: string;
  weight?: string;
  size?: number;
}>`
  margin: ${(props) => (props.radius && props.radius)};
  padding: ${(props) => (props.padding && props.padding)};
  background-color: ${(props) => (props.background ? `${props.background}` : '#BCC2CE')};
  color: ${(props) => (props.color ? `${props.color}` : '#1C1C1D')};
  border-radius: ${(props) => (props.radius && props.radius)};
  border: ${(props) => (props.border ? `${props.border}` : '1px solid #1C1C1D')};
  font-size: ${(props) => (props.size ? `${props.size}` : '12px')};
  cursor: pointer;
`;

export { StyledButton };
