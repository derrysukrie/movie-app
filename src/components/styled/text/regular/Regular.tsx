import styled from 'styled-components';

const TextRegular = styled.div<{ bold?: boolean; cursor?: boolean; color?: string }>`
  font-size: 16px;
  font-weight: ${(props) => (props.bold ? '700' : '')};
  cursor: ${(props) => (props.cursor ? 'pointer' : null)};
  color: ${(props) => (props.color ? `#${props.color}` : null)};
`;

export { TextRegular };
