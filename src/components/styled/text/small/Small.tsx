import styled from 'styled-components';

const TextSmall = styled.div<{ bold?: boolean; cursor?: boolean, color?: string }>`
  font-size: 14px;
  font-weight: ${(props) => (props.bold ? '500' : '')};
  cursor: ${(props) => (props.cursor ? 'pointer' : null)};
  color: ${(props) => (props.color ? `#${props.color}` : null)};
`;

export { TextSmall };
