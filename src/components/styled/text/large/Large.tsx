import styled from 'styled-components';

const TextLarge = styled.span<{bold?: boolean}>`
  font-size: 18px;
  line-height: 0;
  font-weight: ${(props) => (props.bold ? '700' : '')};
`;

export { TextLarge };
